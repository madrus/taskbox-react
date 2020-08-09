module.exports = {
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/addon-links/register',
		'@storybook/preset-create-react-app',
		{
			name: '@storybook/addon-docs',
			options: {
				configureJSX: true,
			},
		},
	],
}
