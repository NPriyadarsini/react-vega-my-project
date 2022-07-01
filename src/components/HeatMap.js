import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('HeatMap', {
	description: 'A Heat Map .',
	data: {
		// eslint-disable-next-line max-len
		url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/seattle-weather.csv',
	},
	width: 400,
	height: 400,
	title: 'Daily Max Temperatures (C) in Seattle, WA',
	config: {
		view: {
			strokeWidth: 0,
			step: 13,
		},
		axis: {
			domain: false,
		},
	},
	mark: 'rect',
	encoding: {
		x: {
			field: 'date',
			timeUnit: 'date',
			type: 'ordinal',
			title: 'Day',
			axis: {
				labelAngle: 0,
				format: '%e',
			},
		},
		y: {
			field: 'date',
			timeUnit: 'month',
			type: 'ordinal',
			title: 'Month',
		},
		color: {
			field: 'temp_max',
			aggregate: 'max',
			type: 'quantitative',
			legend: {
				title: null,
			},
		},
	},
});
