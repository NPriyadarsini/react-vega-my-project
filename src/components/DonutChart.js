import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('DonutChart', {
	description: 'A simple Donut Chart',
	width: 400,
	height: 400,
	mark: { type: 'arc', innerRadius: 50, outerRadius: 90 },
	title: 'No of Vehicles WorldWide(Millions)',
	encoding: {
		color: { timeUnit: 'year',
			field: 'year',
			type: 'nominal' },
		theta: { field: 'number',
			type: 'quantitative',
			stack: true },
	},
});
