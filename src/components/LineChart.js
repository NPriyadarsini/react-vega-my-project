import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
	description: 'A simple Line chart with embedded data.',
	data: {
		// eslint-disable-next-line max-len
		url: 'https://raw.githubusercontent.com/vega/vega/main/docs/data/stocks.csv',
	},
	transform: [{ filter: 'datum.symbol===\'MSFT\'' }],
	width: 400,
	height: 200,
	mark: 'line',
	encoding: {
		x: { field: 'date', type: 'temporal' },
		y: { field: 'price', type: 'quantitative' },
	},
});
