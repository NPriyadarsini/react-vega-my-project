/* eslint-disable max-lines-per-function */
import React from 'react';
import { VegaLite } from 'react-vega';

const PieChart = ({ config: { chartProps: { width, autosize }}, data }) => {
	const spec = {
		description: 'A simple Pie chart',
		width: width,
		autosize: autosize,
		params: [{ name: 'highlight', select: 'point' }],
		mark: { type: 'arc', tooltip: true },
		title: 'No of Vehicles WorldWide(Millions)',
		encoding: {
			color: { timeUnit: 'year', field: 'year', type: 'nominal' },
			theta: { field: 'number', type: 'quantitative', stack: true },
			stroke: {
				condition: {
					param: 'highlight',
					empty: false,
					value: 'black',
				},
				value: null,
			},
			opacity: {
				condition: { param: 'highlight', value: 1 },
				value: 0.5,
			},
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite { ...{ spec, data, actions } }/>;
};

export default PieChart;
