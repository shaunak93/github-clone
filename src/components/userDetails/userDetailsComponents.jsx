import React from 'react';

function TabGroup({tabs, selectedTab, onTabChange}){
	return <div className="user-details-tabs">
		{tabs.map((tab)=> <Tab
			key={'tab_'+tab.title}
			isSelected={selectedTab === tab.value}
			tabDetails = {tab}
			onClick={() => onTabChange(tab.value)}
		/>)}
	</div>
}
function Tab({isSelected, tabDetails, onClick}){
	return <div className={"user-details-tab " + (isSelected?"selected":'')} onClick={onClick}>
		<i className={tabDetails.iconClass} aria-hidden="true"></i>
		{tabDetails.title}
	</div>
}
function TabPanel({tabPanels, selectedTab}){
	const getselectedTabComponent = () => {
		let selectedTabPanel = tabPanels.find((tabPanel)=>{return tabPanel.key === selectedTab});
		return selectedTabPanel.component;
	}
	return <div className="user-details-tab-panel">
		{getselectedTabComponent()}
	</div>
}
export {TabGroup, TabPanel};
