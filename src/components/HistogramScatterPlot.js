/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import React from 'react';
import { VegaLite } from 'react-vega';

const HistogramScatterPlot = ({ config: { chartProps: { width, autosize }}}) => {
	const spec = {
		description: '2D Histogram ScatterPlot.',
		data: {
			url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json',
		},
		width: width,
		autosize: autosize,
		mark: 'circle',
		encoding: {
			x: {
				bin: { maxbins: 10 }, field: 'IMDB Rating',
			},
			y: {
				bin: { maxbins: 10 }, field: 'Rotten Tomatoes Rating',
			},
			size: { aggregate: 'count' },
		},
	};

	return <VegaLite { ...{ spec } }/>;
};

export default HistogramScatterPlot;
