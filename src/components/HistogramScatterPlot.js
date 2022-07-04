import React from 'react';
import { VegaLite } from 'react-vega';

const HistogramScatterPlot = () => {
	const spec = {
		description: '2D Histogram ScatterPlot.',
		data: {
			// eslint-disable-next-line max-len
			url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/movies.json',
		},
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
