/* eslint-disable max-lines-per-function */

const props = () => ({
	data: {
		url: 'https://raw.githubusercontent.com/vega/vega/main/docs/'
		+ 'data/seattle-weather.csv',
	},
	vconcat: [
		{
			params: [{
				name: 'brush',
				select: { type: 'interval', encodings: ['x'] },
			}],
			transform: [{ filter: { param: 'click' }}],
			mark: 'point',
			encoding: {
				x: {
					field: 'date',
					timeUnit: 'monthdate',
					title: 'Date',
					axis: { format: '%b' },
				},
				y: {
					title: 'Maximum Daily Temperature (C)',
					field: 'temp_max',
					type: 'quantitative',
				},
				color: {
					condition: {
						param: 'brush',
						title: 'Weather',
						field: 'weather',
						type: 'nominal',
						scale: { scheme: 'set2' },
					},
					value: 'lightGray',
				},
				size: {
					title: 'Precipitation',
					field: 'precipitation',
					scale: { domain: ['-1', '50'] },
					type: 'quantitative',
				},
			},
		},
		{
			params: [{
				name: 'click',
				select: { type: 'point', encodings: ['color'] },
			}],
			transform: [{ filter: { param: 'brush' }}],
			mark: 'bar',
			encoding: {
				x: { aggregate: 'count' },
				y: { title: 'Weather', field: 'weather' },
				color: {
					condition: {
						param: 'click',
						field: 'weather',
					},
					value: 'lightGray',
				},
			},
		},
	],
});

export default props;
