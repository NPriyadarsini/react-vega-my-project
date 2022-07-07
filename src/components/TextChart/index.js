import React from 'react';
import VegaLiteChart from '../VegaLiteChart';
import props from './props';

const TextChart = (context) => {
	const spec = {
		...props(context),
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default TextChart;
