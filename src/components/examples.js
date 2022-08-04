/* eslint-disable max-lines-per-function */
import BarChart from './BarChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import TextChart from './TextChart';
import LineChart from './LineChart';
import GroupChart from './GroupChart';
import ScatterPlot from './HistogramScatterPlot';
import HeatMapWeather from './HeatMapWeather';
import HeatMap from './HeatMap';
import PointAndBar from './MultiView/PointAndBar';
import BoxPlot from './boxPlot';
import PyramidChart from './pyramidChart';
import PopulationPlot from './populationPlot';
import MosaicChart from './mosaicChart';
import ChartManager from '../service/chartManager';

const examples = (context) => {
	const { config: { text, chartData }} = context;
	const { getProductsGroupChart } = ChartManager;

	return [
		{
			path: '',
			component: BarChart,
			label: 'BarChart',
			data: chartData,
		},
		{
			path: 'pieChart',
			component: PieChart,
			label: 'PieChart',
			data: chartData,
		},
		{
			path: 'DonutChart',
			component: DonutChart,
			label: 'DonutChart',
			data: chartData,
		},
		{
			path: 'textChart',
			component: TextChart,
			label: 'TextChart',
			data: text,
		},
		{
			path: 'lineChart',
			component: LineChart,
			label: 'LineChart',
		},
		{
			path: 'groupChart',
			component: GroupChart,
			label: 'GroupChart',
			data: getProductsGroupChart(context),
		},
		{
			path: 'scatterPlot',
			component: ScatterPlot,
			label: 'ScatterPlot',
		},
		{
			path: 'heatMapWeather',
			component: HeatMapWeather,
			label: 'HeatMapWeather',
		},
		{
			path: 'heatMap',
			component: HeatMap,
			label: 'HeatMap',
		},
		{
			path: 'pointAndBar',
			component: PointAndBar,
			label: 'PointAndBar',
		},
		{
			path: 'boxPlot',
			component: BoxPlot,
			label: 'BoxPlot',
		},
		{
			path: 'pyramidChart',
			component: PyramidChart,
			label: 'PyramidChart',
		},
		{
			path: 'populationPlot',
			component: PopulationPlot,
			label: 'PopulationPlot',
		},
		{
			path: 'mosaicChart',
			component: MosaicChart,
			label: 'MosaicChart',
		},
	];
};

export default examples;
