/* eslint-disable max-lines-per-function */

const props = () => ({

	$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
	data: {
		url: 'https://raw.githubusercontent.com/vega/vega/main/'
						+ 'docs/data/population.json',
	},
	transform: [
		{
			calculate: 'datum.sex == 2 ? \'Female\' : \'Male\'', as: 'gender',
		},
		{
			calculate: 'datum.age < 14 && \'Child\' || datum.age < 35 '
			+ ' && \'Adult\' || datum.age < 100 && \'Old\'',
			as: 'lifeRange',
		},
	],
	mark: 'bar',
	encoding: {
		x: {
			field: 'age',
			type: 'nominal',
		},
		y: {
			field: 'people',
			aggregate: 'sum',
			type: 'quantitative',
		},
		color: { field: 'lifeRange' },
	},

});

export default props;
