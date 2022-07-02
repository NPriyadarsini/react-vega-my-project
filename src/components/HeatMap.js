/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';

const HeatMap = () => {
	const spec = {
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
				strokeWidth: 0,	step: 13,
			},
			axis: {
				domain: false,
			},
		},
		mark: 'rect',
		encoding: {
			x: {
				field: 'date', timeUnit: 'date', type: 'ordinal', title: 'Day',
				axis: {
					labelAngle: 0, format: '%e',
				},
			},
			y: {
				// eslint-disable-next-line max-len
				field: 'date', timeUnit: 'month',	type: 'ordinal', title: 'Month',
			},
			color: {
				field: 'temp_max', aggregate: 'max', type: 'quantitative',
				legend: {
					title: null,
				},
			},
		},
	};

	return <VegaLite { ...{ spec } }/>;
};

export default HeatMap;
