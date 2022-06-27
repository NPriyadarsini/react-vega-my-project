import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('PieChart', {
	description: 'A simple Pie chart',
	width: 400,
	height: 400,
	mark: 'arc',
	title: 'No of Vehicles WorldWide(Millions)',
	encoding: {
		color: { timeUnit: 'year',
			field: 'year',
			type: 'nominal' },
		theta: { field: 'number',
			type: 'quantitative',
			stack: true },
	},
	layer: [{
		mark: { type: 'arc', outerRadius: 90 },
	}, {
		mark: { type: 'text', radius: 100 },
		encoding: {
			text: { field: 'number', type: 'nominal' },
		},
	}],
});
