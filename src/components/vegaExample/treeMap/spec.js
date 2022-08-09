const two = 2;

// eslint-disable-next-line max-lines-per-function
const spec = ({ config: { heatMapProps: { width, height }}}) => ({
	width: width,
	height: height,
	signals: [
		{
			name: 'layout', value: 'squarify',
			bind: {
				input: 'select',
				options: [
					'squarify',
					'binary',
					'slicedice',
				],
			},
		},
		{
			name: 'aspectRatio', value: 1.6,
			bind: { input: 'range', min: 1, max: 5, step: 0.1 },
		},
	],
	data: [
		{
			name: 'tree',
			url: 'https://raw.githubusercontent.com/vega/vega/main/'
			+ 'docs/data/flare.json',
			transform: [
				{
					type: 'stratify',
					key: 'id',
					parentKey: 'parent',
				},
				{
					type: 'treemap',
					field: 'size',
					sort: { field: 'value' },
					round: true,
					method: { signal: 'layout' },
					ratio: { signal: 'aspectRatio' },
					size: [{ signal: 'width' }, { signal: 'height' }],
				},
			],
		},
		{
			name: 'nodes',
			source: 'tree',
			transform: [{ type: 'filter', expr: 'datum.children' }],
		},
		{
			name: 'leaves',
			source: 'tree',
			transform: [{ type: 'filter', expr: '!datum.children' }],
		},
	],
	scales: [
		{
			name: 'color',
			type: 'ordinal',
			domain: { data: 'nodes', field: 'name' },
			range: { scheme: 'set3' },
		},
		{
			name: 'size',
			type: 'ordinal',
			// eslint-disable-next-line no-magic-numbers
			range: [((width + height) / two) / two, 20, 15, 10],
		},
		{
			name: 'opacity',
			type: 'ordinal',
			// eslint-disable-next-line no-magic-numbers
			range: [0.15, 0.5, 0.8, 1.0],
		},
	],
	marks: [
		{
			type: 'rect',
			from: { data: 'nodes' },
			interactive: false,
			encode: {
				enter: {
					fill: { scale: 'color', field: 'name' },
				},
				update: {
					x: { field: 'x0' },
					y: { field: 'y0' },
					x2: { field: 'x1' },
					y2: { field: 'y1' },
				},
			},
		},
		{
			type: 'rect',
			from: { data: 'leaves' },
			encode: {
				enter: {
					stroke: { value: '#fff' },
				},
				update: {
					x: { field: 'x0' },
					y: { field: 'y0' },
					x2: { field: 'x1' },
					y2: { field: 'y1' },
					fill: { value: 'transparent' },
				},
				hover: {
					fill: { value: 'red' },
				},
			},
		},
		{
			type: 'text',
			from: { data: 'nodes' },
			interactive: false,
			encode: {
				enter: {
					align: { value: 'center' },
					baseline: { value: 'middle' },
					fill: { value: '#000' },
					text: { field: 'name' },
					fontSize: { scale: 'size', field: 'depth' },
					fillOpacity: { scale: 'opacity', field: 'depth' },
				},
				update: {
					x: { signal: '0.5 * (datum.x0 + datum.x1)' },
					y: { signal: '0.5 * (datum.y0 + datum.y1)' },
				},
			},
		},
	],
});

export default spec;
