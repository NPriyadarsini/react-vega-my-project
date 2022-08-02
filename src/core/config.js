const config = {
	chartData: {
		values: [
			{ year: '2016', number: 1.2 },
			{ year: '2017', number: 1.9 },
			{ year: '2018', number: 3.1 },
			{ year: '2019', number: 4.8 },
			{ year: '2020', number: 6.9 },
			{ year: '2021', number: 11.3 },
		],
	},

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
