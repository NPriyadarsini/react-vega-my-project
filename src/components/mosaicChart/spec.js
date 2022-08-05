/* eslint-disable max-lines-per-function */

const getSpec = () => ({
	data: {
		url: 'https://raw.githubusercontent.com/vega/vega/main/'
		+ 'docs/data/cars.json',
	},
	transform: [
		{
			aggregate: [
				{
					op: 'count',
					as: 'count*',
				},
			],
			groupby: [
				'Origin',
				'Cylinders',
			],
		},
		{
			stack: 'count*',
			as: [
				'stackCountOrigin1',
				'stackCountOrigin2',
			],
			offset: 'normalize',
			sort: [
				{
					field: 'Origin',
					order: 'ascending',
				},
			],
		},
		{
			window: [
				{
					op: 'min',
					field: 'stackCountOrigin1',
					as: 'x',
				},
				{
					op: 'max',
					field: 'stackCountOrigin2',
					as: 'x2',
				},
				{
					op: 'dense_rank',
					as: 'rankCylinders',
				},
				{
					op: 'distinct',
					field: 'Cylinders',
					as: 'distinctCylinders',
				},
			],
			groupby: [
				'Origin',
			],
			frame: [
				null,
				null,
			],
			sort: [
				{
					field: 'Cylinders',
					order: 'ascending',
				},
			],
		},
		{
			window: [
				{
					op: 'dense_rank',
					as: 'rankOrigin',
				},
			],
			frame: [
				null,
				null,
			],
			sort: [
				{
					field: 'Origin',
					order: 'ascending',
				},
			],
		},
		{
			stack: 'count*',
			groupby: [
				'Origin',
			],
			as: [
				'y',
				'y2',
			],
			offset: 'normalize',
			sort: [
				{
					field: 'Cylinders',
					order: 'ascending',
				},
			],
		},
		{
			calculate: 'datum.y + (datum.rankCylinders - 1) '
			+ '* datum.distinctCylinders * 0.01 / 3',
			as: 'ny',
		},
		{
			calculate: 'datum.y2 + (datum.rankCylinders - 1) '
			+ '* datum.distinctCylinders * 0.01 / 3',
			as: 'ny2',
		},
		{
			calculate: 'datum.x + (datum.rankOrigin - 1) * 0.01',
			as: 'nx',
		},
		{
			calculate: 'datum.x2 + (datum.rankOrigin - 1) * 0.01',
			as: 'nx2',
		},
		{
			calculate: '(datum.nx+datum.nx2)/2',
			as: 'xc',
		},
		{
			calculate: '(datum.ny+datum.ny2)/2',
			as: 'yc',
		},
	],
	vconcat: [
		{
			mark: {
				type: 'text',
				baseline: 'middle',
				align: 'center',
			},
			encoding: {
				x: {
					aggregate: 'min',
					field: 'xc',
					title: 'Origin',
					axis: {
						orient: 'top',
					},
				},
				color: {
					field: 'Origin',
					legend: null,
				},
				text: { field: 'Origin' },
			},
		},
		{
			layer: [
				{
					mark: {
						type: 'rect',
					},
					encoding: {
						x: {
							field: 'nx',
							type: 'quantitative',
							axis: null,
						},
						x2: { field: 'nx2' },
						y: {
							field: 'ny',
							type: 'quantitative',
						},
						y2: { field: 'ny2' },
						color: {
							field: 'Origin',
							type: 'nominal',
							legend: null,
						},
						opacity: {
							field: 'Cylinders',
							type: 'quantitative',
							legend: null,
						},
						tooltip: [
							{
								field: 'Origin',
								type: 'nominal',
							},
							{
								field: 'Cylinders',
								type: 'quantitative',
							},
						],
					},
				},
				{
					mark: {
						type: 'text',
						baseline: 'middle',
					},
					encoding: {
						x: {
							field: 'xc',
							type: 'quantitative',
							axis: null,
						},
						y: {
							field: 'yc',
							type: 'quantitative',
							axis: {
								title: 'Cylinders',
							},
						},
						text: {
							field: 'Cylinders',
							type: 'nominal',
						},
					},
				},
			],
		},
	],
});

export default getSpec;
