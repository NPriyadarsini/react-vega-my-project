import React from 'react';
import VegaLiteChart from '../VegaLiteChart';
import getConfig from './getConfig';
import getSpec from './spec';

const MosaicChart = (context) => {
	const spec = {
		...getSpec(context),
		config: getConfig(context),
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default MosaicChart;
