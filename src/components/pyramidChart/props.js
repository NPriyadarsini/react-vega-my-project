/* eslint-disable max-lines-per-function */

const props = () => ({
	data: { url: 'https://raw.githubusercontent.com/vega/vega/main/'
+ 'docs/data/population.json' },

	transform: [
		{
			calculate: 'datum.sex == 1 ? \'Male\' : \'Female\'', as: 'gender',
		},
	],
	spacing: 0.5,
	concat: [
		{
			title: 'Male',
			transform: [
				{
					filter: 'datum.gender === \'Male\'',
				},
			],
			mark: 'bar',
			encoding: {
				x: {
					field: 'people',
					type: 'quantitative',
					aggregate: 'sum',
					sort: 'descending',
					axis: { format: 's' },
				},
				y: {
					field: 'age',
					sort: 'descending',
					axis: null,
				},
				color: {
					field: 'gender',
					scale: { scheme: 'set2' },
				},
			},
		},
		{
			title: 'Female',
			transform: [
				{
					filter: { field: 'gender', equal: 'Female' },
				},
			],
			mark: 'bar',
			encoding: {
				x: {
					aggregate: 'sum',
					field: 'people',
					type: 'quantitative',
					axis: { format: 's' },
				},
				y: {
					field: 'age',
					sort: 'descending',
					title: null,
					axis: { ticks: false, labelPadding: 10 },
				},
				color: {
					field: 'gender',
				},
			},
		},
	],
});

export default props;
