# Storybook

## Migration to Storybook 5.3

See the official [Migration Guide from version 5.2.x to 5.3.x](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#from-version-52x-to-53x).

## Installation

``` bash
# Create our application:
npx create-react-app taskbox
cd taskbox

# Add Storybook:
npx -p @storybook/cli sb init

```

Installing storybook resulted in a warning:

>WARNING: We noticed you're using the `useBuiltIns` option without declaring a core-js version. Currently, we assume version 2.x when no version is passed. Since this default version will likely change in future versions of Babel, we recommend explicitly setting the core-js version you are using via the `corejs` option.
>
>You should also be sure that the version you pass to the `corejs` option matches the version specified in your `package.json`'s `dependencies` section. If it doesn't, you need to run one of the following commands:
>
>  npm install --save core-js@2    npm install --save core-js@3
>  yarn add core-js@2              yarn add core-js@3
>
>[BABEL] Note: The code generator has deoptimised the styling of C:\Users\AROUSSA58\AppData\Roaming\npm-cache\_npx\1064\node_modules\@storybook\cli\node_modules\lodash\lodash.js as it exceeds the max of 500KB.

``` bash
# Run the test runner (Jest) in a terminal:
yarn test

# Start the component explorer on port 9009:
yarn run storybook

# Run the frontend app proper on port 3000:
yarn start
```

`yarn test` threw an error about `babel-loader` version mismatch (`8.0.5` instead of `8.0.6`). Here is how I fixed it:

- ran `rm -rf node_modules/ yarn.lock`
- removed `babel-loader` devDependencies and ran `yarn`
- ran `yarn test` and got a new error about `babel-jest` but did not find it among dependencies nor devDependencies
- deleted `node_modules/babel-jest` folder
- ran `yarn install` to reinstall the missing modules
- finally, `yarn test` succeeded

However, `yarn run storybook` failed because of the missing `babel-loader` module. So, I decided to go against the advice:

``` bash
yarn add -D babel-loader@8.0.5
```

After that,`yarn run storybook` succeeded.

## Run

Our project has three frontend app modalities: automated test (Jest), component development (Storybook), and the app itself. Depending on what part of the app you’re working on, you may want to run one or more of these simultaneously. Since our current focus is creating a single UI component, we’ll stick with running Storybook.

With the [Storyshots addon](https://github.com/storybooks/storybook/tree/master/addons/storyshots) a snapshot test is created for each of the stories. Use it by adding a development dependency on the package:

``` bash
yarn add --dev @storybook/addon-storyshots react-test-renderer require-context.macro
```

Then create an `src/storybook.test.js` file with the following in it:

``` js
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots();
```

At some point of tutorial, I got a strange error:

``` none
WARNING in ./src/components/Task.js
Module Warning (from ./node_modules/eslint-loader/index.js):

  Line 22:11:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the hre
f value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it w
ith appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-v
alid.md  jsx-a11y/anchor-is-valid
```

This is because the `a` attribute is only being used as a handle to trigger some JavaScript code and not as a real link. I followed the [advice](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md) to replace `a` with the `button` tag in `Task.js` line 22:

``` jsx
<a onClick={ () => onPinTask(id) }>
  <span className={ `icon-star` } />
</a >
```

with

``` jsx
<button type="button" class="link-button" onClick={ () => onPinTask(id) }>
  <span className={ `icon-star` } />
</button >
```

Then I added the following CSS to `src/index.css`:

``` css
button.link-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline;
  margin: 0;
  padding: 0;
}

button.link-button:hover,
button.link-button:focus {
  text-decoration: none;
}
```

Also, I had to update the snapshot file: `src/__snapshots__/storybook.test.js.snap` and replace

``` jsx
<a
  onClick={[Function]}
>
  <span
    className="icon-star"
  />
</a>
```

with

``` jsx
<button
  className="link-button"
  onClick={[Function]}
  type="button"
>
  <span
    className="icon-star"
  />
</button>
```

> `addDecorator()` in `TaskList.js` component allows us to add some “context” to the rendering of each task. In this case we add padding around the list to make it easier to visually verify.

## Container components

Our `TaskList` component as currently written is “presentational” (see this blog post) in that it doesn’t talk to anything external to its own implementation. To get data into it, we need a “container”.

This example uses [Redux](https://redux.js.org/), the most popular React library for storing data, to build a simple data model for our app. However, the pattern used here applies just as well to other data management libraries like [Apollo](https://www.apollographql.com/client/) and [MobX](https://mobx.js.org/).

Add a new dependency on `package.json` with:

``` bash
yarn add react-redux redux
```

> By definition container components cannot be simply rendered in isolation; they expect to be passed some context or to connect to a service. What this means is that to render a container in Storybook, we must mock (i.e. provide a pretend version) the context or service it requires.

## Using StoryShots for Snapshot Testing

[StoryShots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) is the integration between __Storybook__ and __Jest Snapshot Testing__.

First, make sure you are inside a Storybook-enabled repo (make sure it has few stories). Then, install StoryShots into your app with:

``` bash
yarn add -D @storybook/addon-storyshots
```

Then, assuming you are using Jest for testing, you can create a test file `storyshots.test.js` that contains the following:

```js
import initStoryshots from '@storybook/addon-storyshots';
initStoryshots({ /* configuration options */ });
```

Now you can snapshot test all of your stories with:

``` bash
yarn test
```

This will save the initial set of snapshots inside the `src/__snapshots_` directory. Then, every time you complete any changes, you can run the test again and find all structural changes.

---

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
