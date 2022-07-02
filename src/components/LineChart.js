import React from 'react';
import { VegaLite } from 'react-vega';

const LineChart = ({ data }) => {
	const spec = {
		description: 'A simple Line chart.',
		data: {
		// eslint-disable-next-line max-len
			url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/stocks.csv',
		},
		transform: [{ filter: 'datum.symbol===\'GOOG\'' }],
		width: 400,
		height: 400,
		mark: { type: 'line', tooltip: true },
		encoding: {
			x: { field: 'date', type: 'temporal' },
			y: { field: 'price', type: 'quantitative' },
		},
	};

	return <VegaLite { ...{ spec, data } }/>;
};

export default LineChart;
