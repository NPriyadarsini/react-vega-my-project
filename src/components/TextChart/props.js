// eslint-disable-next-line max-lines-per-function
const props = ({ data }) => ({
	params: [
		{
			name: 'angle',
			value: 0,
			bind: { input: 'range', min: -180, max: 180, step: 1 },
		},
		{
			name: 'dx',
			value: 5,
			bind: { input: 'range', min: -20, max: 20, step: 1 },
		},
		{
			name: 'dy',
			value: 0,
			bind: { input: 'range', min: -20, max: 20, step: 1 },
		},
		{
			name: 'xOffset',
			value: 0,
			bind: { input: 'range', min: -20, max: 20, step: 1 },
		},
		{
			name: 'yOffset',
			value: 0,
			bind: { input: 'range', min: -20, max: 20, step: 1 },
		},
		{
			name: 'fontSize',
			value: 14,
			bind: { input: 'range', min: 1, max: 36, step: 1 },
		},
		{
			name: 'limit',
			value: 0,
			bind: { input: 'range', min: 0, max: 150, step: 1 },
		},
		{
			name: 'align',
			value: 'left',
			bind: { input: 'select', options: ['left', 'center', 'right'] },
		},
		{
			name: 'baseline',
			value: 'middle',
			bind: {
				input: 'select',
				options: ['alphabetic', 'top', 'middle', 'bottom'],
			},
		},
		{
			name: 'font',
			value: 'sans-serif',
			bind: {
				input: 'select',
				options: ['sans-serif', 'serif', 'monospace'],
			},
		},
		{
			name: 'fontWeight',
			value: 'normal',
			bind: { input: 'select', options: ['normal', 'bold'] },
		},
		{
			name: 'fontStyle',
			value: 'normal',
			bind: { input: 'select', options: ['normal', 'italic'] },
		},
	],
	data: {
		values: data,
	},
	encoding: {
		x: {
			field: 'xField',
			type: 'quantitative',
			scale: { domainMax: '100' },
		},
		y: {
			field: 'yField',
			type: 'quantitative',
			scale: { domainMax: '100' },
		},
	},
	layer: [
		{ mark: 'point' },
		{
			mark: {
				type: 'text',
				dx: { expr: 'dx' },
				dy: { expr: 'dy' },
				xOffset: { expr: 'xOffset' },
				yOffset: { expr: 'yOffset' },
				angle: { expr: 'angle' },
				align: { expr: 'align' },
				baseline: { expr: 'baseline' },
				font: { expr: 'font' },
				fontSize: { expr: 'fontSize' },
				fontStyle: { expr: 'fontStyle' },
				fontWeight: { expr: 'fontWeight' },
				limit: { expr: 'limit' },
			},
			encoding: { text: { field: 'label' }},
		},
	],
});

export default props;
