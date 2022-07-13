/* eslint-disable max-lines-per-function */

const props = () => ({
	data: { url: 'https://raw.githubusercontent.com/holtzy/'
	+ 'D3-graph-gallery/master/DATA/iris.csv' },
	width: 400,
	height: 400,
	encoding: {
		y: {
			field: 'Species', type: 'nominal',
			axis: { ticks: false, domain: false },
		},
		x: {
			field: 'Sepal_Length',
			type: 'quantitative',
			scale: { zero: false },
		},
	},
	layer: [
		{
			mark: {
				type: 'boxplot',
				extent: 'min-max',
				size: 50,
			},
			encoding: {
				fill: { value: '#cde4e0' },
			},
		},
		{
			mark: {
				type: 'circle',
				tooltip: true,
			},
			encoding: {
				x: { field: 'Sepal_Length' },
				color: {
					field: 'Sepal_Length',
					legend: null,
					scale: { scheme: 'inferno' },
				},
				stroke: { value: '#000000' },
				strokeWidth: { value: 0.5 },
				size: { value: 50 },
			},
		},
	],

});

export default props;
