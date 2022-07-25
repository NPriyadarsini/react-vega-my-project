import React from 'react';
import VegaLiteChart from '../VegaLiteChart';
import props from './props';

const PopulationPlot = (context) => {
	const spec = {
		...props(context),
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default PopulationPlot;
