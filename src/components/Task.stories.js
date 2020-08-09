import React from 'react'
// import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { withKnobs, object } from '@storybook/addon-knobs/react'

import Task from './Task'

export default {
	component: Task,
	title: 'Task',
	// Our exports that end in "Data" are not stories.
	excludeStories: /.*Data$/,
}

export const taskData = {
	id: '1',
	title: 'Test Task',
	state: 'TASK_INBOX',
	updatedAt: new Date(2019, 0, 6, 1, 3),
}

export const actionsData = {
	onPinTask: action('onPinTask'),
	onArchiveTask: action('onArchiveTask'),
}

const longTitle = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not`

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />
export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
export const Archived = () => <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
export const LongTitle = () => <Task task={{ ...taskData, title: longTitle }} {...actionsData} />

// storiesOf('Task', module)
// 	.addDecorator(withKnobs)
// 	.add('default', () => {
// 		return <Task task={object('task', { ...taskData })} {...actionsData} />
// 	})
// 	.add('pinned', () => (
// 		<Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
// 	))
// 	.add('archived', () => (
// 		<Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
// 	))
// 	.add('long title', () => (
// 		<Task task={{ ...taskData, title: longTitle }} {...actionsData} />
// 	))
