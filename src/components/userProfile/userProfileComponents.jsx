import React from 'react';

function UserNameCard({url, name, nickName}){
	return <div className="user-name-card">
		<div className="user-avatar">
			<img src={url} alt="Loading..."/>
		</div>
		<div className="user-name-plate">
			<p>{name}</p>
			<p>{nickName}</p>
		</div>
	</div>;
}
function UserDescription({description}){
	return <div className="user-description">
		<p>{description}</p>
	</div>;
}
function UserFollowSection(){
	return <div className="user-follow-section">
		<button>Follow</button>
		<i className="fa fa-ellipsis-h" aria-hidden="true"></i>
	</div>;
}

function UserSocialStatus({followers ,following, stars}){
	return <div className="user-social-status">
		<a href="/"><i className="fa fa-users" aria-hidden="true"></i>&nbsp;
			<p>{followers}</p>
			&nbsp;followers
		</a>
		 &nbsp;&middot;&nbsp;
		<a href="/">
			<p>{following}</p>
			&nbsp;following
		</a>
		 &nbsp;&middot;&nbsp;
		<a href="/"><i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;
			<p>{stars}</p>
		</a>
	</div>;
}

function UserLocationCard({country, company}){
	return <div className="user-location-card">
		<div>
			<i className="fa fa-building-o" aria-hidden="true"></i>{company}
		</div>
		<div>
			<i className="fa fa-map-marker" aria-hidden="true"></i>{country}
		</div>
	</div>
}

function UserMailCard({mail}){
	return <div className="user-mail-card">
		<a href="/"><i className="fa fa-envelope-o" aria-hidden="true"></i>{mail}</a>
	</div>
}
export {UserNameCard, UserDescription, UserFollowSection, UserSocialStatus, UserLocationCard, UserMailCard};
