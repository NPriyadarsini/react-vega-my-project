import React from 'react';
import { VegaLite } from 'react-vega';

const BarChart = ({ data }) => {
	const spec = {
		description: 'A simple bar chart with embedded data.',
		width: 400,
		height: 400,
		mark: { type: 'bar' },
		encoding: {
			x: { field: 'year', type: 'ordinal' },
			y: { field: 'number', type: 'quantitative',
				title: 'Number of Vehicles in Millions' },
		},
		data: { name: 'values' },
	};

	return <VegaLite { ...{ spec, data } }/>;
};

export default BarChart;
