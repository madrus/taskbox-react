import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux'

import { PureInboxScreen } from './InboxScreen'
import { defaultTasksData } from './TaskList.stories'

// A super-simple mock of a redux store
const store = {
	getState: () => {
		return {
			tasks: defaultTasksData,
		}
	},
	subscribe: () => 0,
	dispatch: action('dispatch'),
}

storiesOf('InboxScreen', module)
	.addDecorator(story => <Provider store={store}>{story()}</Provider>)
	.add('default', () => <PureInboxScreen />)
	.add('error', () => <PureInboxScreen error='Some error has occurred' />)
