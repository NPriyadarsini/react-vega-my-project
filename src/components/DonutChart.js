import React from 'react';
import { VegaLite } from 'react-vega';

const DonutChart = ({ config: { chartProps: { width, autosize }}, data }) => {
	const spec = {
		description: 'A simple Donut Chart',
		width: width,
		autosize: autosize,
		mark: { type: 'arc', innerRadius: 40 },
		title: 'No of Vehicles WorldWide(Millions)',
		encoding: {
			color: { timeUnit: 'year',
				field: 'year',
				type: 'nominal' },
			theta: { field: 'number',
				type: 'quantitative',
				stack: true },
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite { ...{ spec, data, actions } }/>;
};

export default DonutChart;
