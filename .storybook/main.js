// .storybook/main.js

module.exports = {
	stories: ['../src/components/**/*.stories.js'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-knobs',
		'@storybook/addon-links',
		'@storybook/addon-viewport',
		'@storybook/preset-create-react-app',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
			},
		},
	],
}
