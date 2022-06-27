import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
	description: 'A simple bar chart with embedded data.',
	width: 400,
	height: 100,
	mark: 'line',
	encoding: {
		x: { timeUnit: 'year',
			field: 'year',
			type: 'temporal' },
		y: { field: 'number',
			type: 'quantitative',
			title: 'Number of Vehicles in Millions' },
	},
});
