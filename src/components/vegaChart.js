import React from 'react';
import { Vega } from 'react-vega';

const VegaChart = (spec) =>
	<Vega { ...{ ...spec, actions: false } }/>;

export default VegaChart;
