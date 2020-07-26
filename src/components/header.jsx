import React from 'react';

function Header() {
	return <header>
		<div className="header-item" style={{color: '#fff'}}>
			<i className="fa fa-github" style={{fontSize: '38px' }}aria-hidden="true"></i>
		</div>
		<div className="header-item">
			<input type="text" className="header-search-box" placeholder="Search or jump to..."></input>
		</div>
		<div className="header-item">
			<a className="header-tab-a" href="/">Pulls</a>
		</div>
		<div className="header-item">
			<a className="header-tab-a" href="/">Issues</a>
		</div>
		<div className="header-item">
			<a className="header-tab-a" href="/">Marketplace</a>
		</div>
		<div className="header-item">
			<a className="header-tab-a" href="/">Explore</a>
		</div>
		<div className="header-item" style={{color: '#fff', marginLeft: 'auto'}}>
			<i className="fa fa-bell-o" style={{fontSize: '17px' }}aria-hidden="true"></i>
		</div>
		<div className="header-item" style={{color: '#fff'}}>
			<i className="fa fa-plus" style={{fontSize: '17px'}}aria-hidden="true"></i>&nbsp;
			<i className="fa fa-caret-down" style={{fontSize: '14px' }}aria-hidden="true"></i>
		</div>
		<div className="header-item" style={{color: '#fff', marginRight: '0'}}>
			<i className="fa fa-user-circle-o" style={{fontSize: '17px'}}aria-hidden="true"></i>&nbsp;
			<i className="fa fa-caret-down" style={{fontSize: '14px' }}aria-hidden="true"></i>
		</div>

	</header>;
}



export {Header}
