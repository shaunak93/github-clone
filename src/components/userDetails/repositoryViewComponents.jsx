import React from 'react';
import moment from 'moment';
import {getDotColor} from './repositoriesViewUtils';

function Repositories({repoDetails}){
	return <div className="repository-list-item">
		<div className="repository-details-container">
			<h3>{repoDetails.name}</h3>
			{(repoDetails.fork && repoDetails.homepage)?<ForkDetails homepage={repoDetails.homepage}/>:null}
			{repoDetails.description?<RepoDescription description={repoDetails.description}/>:null}
			<div className="repository-details">
				{repoDetails.language?<Language language={repoDetails.language}/>:null}
				<div>Updated on {moment(repoDetails.updated_at).format('DD MMM YYYY')}</div>
			</div>
		</div>
		<div className="repository-star-container">
			<button>
				<i className="fa fa-star-o" aria-hidden="true"></i>&nbsp;Star
			</button>
		</div>
	</div>
}
function FilterResultCount({searchString, selectedType, selectedLanguage, count}){
	return <div className="filter-result-count repository-list-item">
		<div styles={{width:"75%"}}>
			<b>{count}</b> results
				{(selectedType !== 'all')?[" for ", <b key="selectedType">{selectedType}</b> ," repositories"]:''}
				{(selectedLanguage !== 'all')?[" for ", <b key="selectedLanguage">{selectedLanguage}</b> ," language"]:''}
				{(searchString !== '')?[" matching ", <b key="searchString">{searchString}</b>]:''}

		</div>
		<div styles={{width:"25%"}}>
		</div>
	</div>
}
function ForkDetails({homepage}){
	return <div className="fork-details">
		<p>Forked from &nbsp;<a href="/">{homepage}</a></p>
	</div>
}
function RepoDescription({description}){
	return <div className="repo-description">
		<p>{description}</p>
	</div>
}
function Language({language}){
	let dotColor = getDotColor(language);
	return <div><span className="dot" style={{backgroundColor: dotColor}}></span>&nbsp;{language}</div>
}

export {Repositories, FilterResultCount}
