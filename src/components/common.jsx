import React from 'react';

function Loader(){
	return <div className="loader-container">
		<div className="loader">
			<i className="fa fa-spinner" aria-hidden="true"></i>
		</div>
	</div>
}
function ErrorPanel() {
	return <div className="error-panel-container">
		<div className="error">
			<i className="fa fa-exclamation-circle" aria-hidden="true"></i>
		</div>
	</div>
}

function WorkUnderProgress() {
	return <div className="work-under-progress-container">
		<div className="work-under-progress">
			<i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
			<p>Work Under Progress</p>
		</div>
	</div>
}

 export {Loader, ErrorPanel, WorkUnderProgress};
