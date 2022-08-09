import React from 'react';
import VegaChart from '../../vegaChart';
import getSpec from './spec';

const TreeMap = (context) => {
	const spec = {
		...getSpec(context),
	};

	return <VegaChart { ...{ spec } }/>;
};

export default TreeMap;
