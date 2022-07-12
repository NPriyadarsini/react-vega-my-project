import React from 'react';
import VegaLiteChart from '../../VegaLiteChart';
import props from './props';

const PointAndBar = (context) => {
	const spec = {
		...props(context),
	};

	return <VegaLiteChart { ...{ spec } }/>;
};

export default PointAndBar;
