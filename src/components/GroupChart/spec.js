
const spec = ({ data, config: { groupChart:
	{
		width = 0, height = 0, type = 'bar',
		xTitle = '', yTitle = '', groupTitle = '',
		...props
	}}}) => ({
	...props,
	width: width,
	height: height,
	mark: { type },
	encoding: {
		x: { field: 'xField', title: xTitle },
		y: { field: 'yField', type: 'quantitative', title: yTitle },
		xOffset: { field: 'group' },
		color: { field: 'group', title: groupTitle },
	},
	data: { values: data },
});

export default spec;
