import React from 'react';
import { VegaLite } from 'react-vega';

const VegaLiteChart = ({ spec, ...props }) =>
	<VegaLite { ...{ spec, ...props } }/>;

export default VegaLiteChart;
