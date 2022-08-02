import React from 'react';
import './App.scss';
import { Box, Paper } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import VerticalTabs from './components/verticalTabs';

const App = (context) =>
	<Box component={ Paper } sx={ { height: '100vMin' } }>
		<BrowserRouter>
			<VerticalTabs { ...context }/>
		</BrowserRouter>
	</Box>;

export default App;
