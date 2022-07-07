const config = {
	groupChart: {
		type: 'bar',
		width: 400,
		height: 400,
	},

	heatMapProps: {
		type: 'rect',
		width: 400,
		height: 400,
	},

	products: [
		{
			product: 'Orange',
			weekOne: 10,
			weekTwo: 200,
			weekThree: 45,
		},
		{
			product: 'Apple',
			weekOne: 30,
			weekTwo: 80,
			weekThree: 45,
		},
		{
			product: 'Grape',
			weekOne: 15,
			weekTwo: 54,
			weekThree: 45,
		},
	],

	chartProps: {
		width: 300,
		autosize: {
			type: 'fit',
			contains: 'padding',
		},
	},

	text: [
		{ xField: 30, yField: 28, label: 'Andy' },
		{ xField: 25, yField: 65, label: 'Brian' },
		{ xField: 70, yField: 43, label: 'Charlie' },
	],
};

export default config;
