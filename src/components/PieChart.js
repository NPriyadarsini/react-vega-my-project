import React from 'react';
import { VegaLite } from 'react-vega';

const PieChart = ({ config: { chartProps: { width, autosize }}, data }) => {
	const spec = {
		description: 'A simple Pie chart',
		width: width,
		autosize: autosize,
		mark: { type: 'arc', tooltip: true },
		title: 'No of Vehicles WorldWide(Millions)',
		encoding: {
			color: { timeUnit: 'year', field: 'year', type: 'nominal' },
			theta: { field: 'number', type: 'quantitative', stack: true },
		},
		data: { name: 'values' },
	};

	return <VegaLite { ...{ spec, data } }/>;
};

export default PieChart;
