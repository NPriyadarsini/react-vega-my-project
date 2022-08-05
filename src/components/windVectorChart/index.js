import React from 'react';
import VegaLiteChart from '../VegaLiteChart';
import getSpec from './spec';

const WindVectorChart = (context) => {
	const { config: { windVectorProps: { width, height }}} = context;
	const spec = {
		...getSpec(context),
		width,
		height,
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default WindVectorChart;
