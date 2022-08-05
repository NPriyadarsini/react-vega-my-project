/* eslint-disable max-lines-per-function */

const two = 2;

const spec = (context) => {
	const { config: { windVectorProps: { width, height, shape }}} = context;

	return {
		data: {
			url: 'https://raw.githubusercontent.com/vega/vega/main/'
		+ 'docs/data/windvectors.csv',
		},
		mark: { type: 'point', shape: shape, filled: true },
		encoding: {
			longitude: { field: 'longitude', type: 'quantitative' },
			latitude: { field: 'latitude', type: 'quantitative' },
			color: {
				field: 'dir', type: 'quantitative',
				scale: { scheme: 'rainbow' },
				legend: null,
			},
			angle: {
				field: 'dir', type: 'quantitative',
			},
			size: {
				field: 'speed', type: 'quantitative',
				scale: { rangeMax: (width + height) / two },
			},
		},
	};
};

export default spec;
