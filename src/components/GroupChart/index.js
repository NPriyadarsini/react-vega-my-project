import React from 'react';
import { VegaLite } from 'react-vega';
import config from './config';
import props from './spec';

const groupChart = (context) => {
	const spec = {
		...props(context),
		config: config(context),
	};

	return <VegaLite { ...{ spec } }/>;
};

export default groupChart;
