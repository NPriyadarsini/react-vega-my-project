/* eslint-disable max-lines-per-function */
import React from 'react';
import VegaLiteChart from '../VegaLiteChart';

const HeatMap = ({ config: { heatMapProps: { type, width, height }}}) => {
	const spec = {
		data: { url: 'https://raw.githubusercontent.com/vega/vega/main/docs/'
		+ 'data/movies.json' },
		transform: [{
			filter: { and: [
				{ field: 'IMDB Rating', valid: true },
				{ field: 'Production Budget', valid: true },
			] },
		}],
		mark: type,
		width: width,
		height: height,
		encoding: {
			x: {
				bin: { maxbins: 60 },
				field: 'IMDB Rating',
				type: 'quantitative',
			},
			y: {
				bin: { maxbins: 60 },
				field: 'Production Budget',
				type: 'quantitative',
				axis: { format: 's' },
			},
			color: {
				aggregate: 'count',
				type: 'quantitative',
				legend: { gradientLength: height },
			},
			size: { value: 100 },
		},
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default HeatMap;
