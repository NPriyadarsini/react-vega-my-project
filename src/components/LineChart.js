import React from 'react';
import { VegaLite } from 'react-vega';

const LineChart = ({ config: { chartProps: { width, autosize }}}) => {
	const spec = {
		description: 'A simple Line chart.',
		data: {
		// eslint-disable-next-line max-len
			url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/stocks.csv',
		},
		transform: [{ filter: 'datum.symbol===\'GOOG\'' }],
		width: width,
		autosize: autosize,
		mark: { type: 'line', tooltip: true },
		encoding: {
			x: { field: 'date', type: 'temporal' },
			y: { field: 'price', type: 'quantitative' },
		},
	};

	return <VegaLite { ...{ spec } }/>;
};

export default LineChart;
