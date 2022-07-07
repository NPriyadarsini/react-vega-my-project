/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';

const HeatMapWeather = ({ config: { chartProps: { width, autosize }}}) => {
	const spec = {
		description: 'A Heat Map .',
		data: {
		// eslint-disable-next-line max-len
			url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/seattle-weather.csv',
		},
		width: width,
		autosize: autosize,
		title: 'Daily Max Temperatures (C) in Seattle, WA',
		config: {
			view: {
				strokeWidth: 0, step: 13,
			},
			axis: {
				domain: false, grid: true, tickBand: 'extent',
			},
		},
		params: [
			{
				name: 'brush',
				select: 'interval',
			},
		],
		mark: 'rect',
		encoding: {
			x: {
				field: 'date', timeUnit: 'date', type: 'ordinal', title: 'Day',
				axis: {
					labelAngle: 0, format: '%e',
				},
			},
			y: {
				field: 'date', timeUnit: 'month', type: 'ordinal',
				title: 'Month',
			},
			color: {
				aggregate: 'max',
				legend: { title: null },
				condition: {
					param: 'brush',
					field: 'temp_max',
					type: 'quantitative',
				},
				value: 'grey',
			},
		},
	};

	return <VegaLite { ...{ spec } }/>;
};

export default HeatMapWeather;
