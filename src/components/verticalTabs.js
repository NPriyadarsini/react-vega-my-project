/* eslint-disable max-lines-per-function */
import React from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Link } from 'react-router-dom';
import examples from './examples';

const VerticalTabs = (context) => {
	const { state, patchState } = context;

	return (
		<Box sx={ { flexGrow: 1, display: 'flex' } }>
			<TabContext value={ state.value }>
				<Box sx={ { borderRight: 1, borderColor: 'divider',
					height: '100vMin' } }
				>
					<TabList
						orientation="vertical"
						variant="scrollable"
						onChange={ (dummy, value) => patchState({ value }) }
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
				</Box>
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
