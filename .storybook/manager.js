// .storybook/manager.js

import { addons } from '@storybook/addons'
import { create } from '@storybook/theming/create'

const theme = create({
	base: 'dark',
	brandTitle: 'My Task Manager',
})

addons.setConfig({
	panelPosition: 'bottom',
	theme,
})
