import React from 'react';
import BarChart from './BarChart';
import PieChart from './PieChart';

import './App.scss';

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
const App = () =>
	<div className="App" role="App">
		<BarChart data={ chartData }/>,
		<PieChart data={ chartData }/>,
	</div>;

export default App;
