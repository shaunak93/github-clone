import React, {useState} from 'react';
import {TabGroup, TabPanel} from './userDetailsComponents';
import {RepositoriesView} from './repositoriesView';
import {WorkUnderProgress} from '../common';

function UserDetails(){
	const [selectedTab, setSelectedTab] = useState('repositories');
	let tabs = [
		{value: 'overview', title: 'Overview', iconClass:"fa fa-book"},
		{value: 'repositories', title: 'Repositories', iconClass:"fa fa-code"},
		{value: 'projects', title: 'Projects', iconClass:"fa fa-bars"}
	];
	let tabPanels = [
		{
			key: 'overview',
			component: <WorkUnderProgress/>
		},{
			key: 'repositories',
			component: <RepositoriesView/>
		},{
			key: 'projects',
			component: <WorkUnderProgress/>
		}
	]

	return <div className="user-details">
		<TabGroup
			selectedTab = {selectedTab}
			tabs = {tabs}
			onTabChange	= {(tabValue)=>{setSelectedTab(tabValue)}}
		/>
		<TabPanel
			tabPanels = {tabPanels}
			selectedTab = {selectedTab}
		/>
	</div>;
}

export {UserDetails};
