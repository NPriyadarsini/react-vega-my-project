/* eslint-disable max-lines-per-function */
import TextChart from './TextChart';
import HeatMap from './HeatMap';
import GroupChart from './GroupChart';
import ChartManager from '../service/chartManager';

const examples = (context) => {
	const { config: { text }} = context;
	const { getProductsGroupChart } = ChartManager;

	return [
		{
			path: '',
			component: GroupChart,
			label: 'GroupChart',
			data: getProductsGroupChart(context),
		},
		{
			path: 'textChart',
			component: TextChart,
			label: 'TextChart',
			data: text,
		},
		{
			path: 'heatMap',
			component: HeatMap,
			label: 'HeatMap',
		},
	];
};

export default examples;
