import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
import LineChart from './LineChart';
import './App.scss';
import GroupChart from './components/GroupChart';
import ChartManager from './service/chartManager';
import HeatMap from './components/HeatMap';

const chartData = {
	values: [
		{ year: '2016', number: 1.2 },
		{ year: '2017', number: 1.9 },
		{ year: '2018', number: 3.1 },
		{ year: '2019', number: 4.8 },
		{ year: '2020', number: 6.9 },
		{ year: '2021', number: 11.3 },
	],
};
const App = (context) => {
	const { getProductsGroupChart } = ChartManager;

	return (
		<div className="App" role="App">
			<BarChart data={ chartData }/>
			<PieChart data={ chartData }/>
			<DonutChart data={ chartData }/>
			<LineChart data={ chartData }/>
			<GroupChart { ...{ ...context,
				data: getProductsGroupChart(context) } }
			/>
			<HeatMap { ...context }/>
		</div>);
};

export default App;
