import React from 'react'
import { storiesOf } from '@storybook/react'

import { PureTaskList } from './TaskList'
import { taskData, actionsData } from './Task.stories'

export const defaultTasks = [
	{ ...taskData, id: '1', title: 'Task 1' },
	{ ...taskData, id: '2', title: 'Task 2' },
	{ ...taskData, id: '3', title: 'Task 3' },
	{ ...taskData, id: '4', title: 'Task 4' },
	{ ...taskData, id: '5', title: 'Task 5' },
	{ ...taskData, id: '6', title: 'Task 6' },
]

export const withPinnedTasks = [
	...defaultTasks.slice(0, 5),
	{ id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
]

storiesOf('TaskList', module)
	.addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
	.add('default', () => <PureTaskList tasks={defaultTasks} {...actionsData} />)
	.add('withPinnedTasks', () => (
		<PureTaskList tasks={withPinnedTasks} {...actionsData} />
	))
	.add('loading', () => <PureTaskList loading tasks={[]} {...actionsData} />)
	.add('empty', () => <PureTaskList tasks={[]} {...actionsData} />)
