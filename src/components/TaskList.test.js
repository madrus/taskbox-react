import React from 'react'
import ReactDOM from 'react-dom'
import { TaskList } from './TaskList'
import { withPinnedTasksData } from './TaskList.stories'

it('renders pinned tasks at the start of the list', () => {
	const div = document.createElement('div')
	const events = { onPinTask: jest.fn(), onArchiveTask: jest.fn() }
	ReactDOM.render(<TaskList tasks={withPinnedTasksData} {...events} />, div)

	// We expect the task titled "Task 6 (pinned)" to be rendered first, not at the end
	const lastTaskInput = div.querySelector(
		'.list-item:nth-child(1) input[value="Task 6 (pinned)"]'
	)
	expect(lastTaskInput).not.toBe(null)

	ReactDOM.unmountComponentAtNode(div)
})
