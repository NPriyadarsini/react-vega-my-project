import React from 'react';
import { VegaLite } from 'react-vega';

const BarChart = ({ config: { chartProps: { width, autosize }}, data }) => {
	const spec = {
		description: 'A simple bar chart with embedded data.',
		width: width,
		autosize: autosize,
		mark: { type: 'bar', tooltip: true },
		encoding: {
			x: { field: 'year', type: 'ordinal' },
			y: { field: 'number', type: 'quantitative',
				title: 'Number of Vehicles in Millions' },
		},
		data: { name: 'values' },
	};
	const actions = false;

	return <VegaLite { ...{ spec, data, actions } }/>;
};

export default BarChart;
