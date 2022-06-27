import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
	description: 'A simple bar chart with embedded data.',
	width: 200,
	height: 200,
	mark: { type: 'bar', width: { band: 0.7 }},
	encoding: {
		x: { timeUnit: 'year',
			field: 'year',
			type: 'temporal' },
		y: { field: 'number',
			type: 'quantitative',
			title: 'Number of Vehicles in Millions' },
	},
});
