/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';
import examples from './examples';

const VerticalTabs = (context) => {
	const { state, patchState } = context;

	return (
		<Box sx={ { flexGrow: 1, display: 'flex', height: '90vMin' } }>
			<TabContext value={ state.value }>
				<TabList
					orientation="vertical"
					variant="scrollable"
					onChange={ (dummy, value) => patchState({ value }) }
					sx={ { borderRight: 1, borderColor: 'divider' } }
				>
					{ examples(context).map(({ path, label }) =>
						<Tab
							key={ path }
							label={ label }
							value={ path }
							to={ `/${ path }` }
							component={ Link }
						/>)}
				</TabList>
				{ examples(context)
					.map(({ path, component: Component, data }) =>
						<TabPanel key={ path } value={ path }>
							<Component { ...{ ...context, data } }/>
						</TabPanel>)}
			</TabContext>
		</Box>
	);
};

export default VerticalTabs;
