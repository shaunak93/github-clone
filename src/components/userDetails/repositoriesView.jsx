import React , {useState, useEffect} from 'react';
import moment from 'moment';
import {Loader, ErrorPanel} from '../common';
import {getUserRepositories} from '../../utils/userRepositoriesUtils';
import {filterByType, filterByLanguage, filterBySearchString, getDotColor} from './repositoriesViewUtils';
import {CONFIGS} from '../../utils/userRepositoriesUtils';

function RepositoriesView(){
	const [repositories, setRepositories] = useState([]);
	const [languageOptions, setLangugeOptions] = useState([{text: 'All', value: 'all'}])
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false);
	const [selectedType, setSelectedType] = useState('all');
	const [selectedLanguage, setSelectedLanguage] = useState('all');
	const [searchString, setSearchString] = useState('');

	const getFilteredRepos = () => {
		let repos = JSON.parse(JSON.stringify(repositories));
		repos = filterBySearchString(filterByLanguage(filterByType(repos, selectedType), selectedLanguage), searchString)
		return repos;
	}
	const showFilterResultCount = () => {
		return (searchString !== '' || selectedLanguage !== 'all' || selectedType !== 'all');
	}
	const clearFilters = () => {
		setSelectedType('all');
		setSelectedLanguage('all');
		setSearchString('');
	}

	useEffect(()=>{
		getUserRepositories((error, response)=>{
			setIsLoading(false)
			if(error){
				setHasError(true);
			}
			else{
				setRepositories((response && response.data) || {})
			}
		})
	},[])

	useEffect(() => {
		let languageOptions = [{text: 'All', value: 'all'}];
		let languageSet = new Set();
		repositories.forEach((repo) => {
			if(repo.language){
				languageSet.add(repo.language)
			}
		});
		for (let language of languageSet){
			languageOptions.push({text: language, value: language})
		}
		setLangugeOptions(languageOptions);
	},[repositories])

	return <div className="repositories-view-container">
		{isLoading
			?<Loader/>
			:(hasError
				?<ErrorPanel/>
				:<>
					<div className="repositories-form">
						<div>
							<input placeholder="Find a repository..." value={searchString} onChange={(event)=>{setSearchString(event.target.value)}}></input>
						</div>
						<div>
							<select value={selectedType} onChange={(event)=>{setSelectedType(event.target.value)}}>
								{CONFIGS.REPO_TYPES.map((opt)=><option key={'type_'+opt.value} value={opt.value}>{opt.text}</option>)}
							</select>
							<select value={selectedLanguage} onChange={(event)=>{setSelectedLanguage(event.target.value)}}>
								{languageOptions.map((opt)=><option key={'language_'+opt.value} value={opt.value}>{opt.text}</option>)}
							</select>
						</div>
					</div>
					{showFilterResultCount()
						?<FilterResultCount
							searchString = {searchString}
							selectedLanguage = {selectedLanguage}
							selectedType = {selectedType}
							count = {getFilteredRepos().length}
							onClearFilters = {clearFilters}
						/>
						:null
					}
					<div className="repositories-list">
						{getFilteredRepos().map((repo)=><Repositories key={"repo_"+repo.name} repoDetails={repo}/>)}
					</div>
				</>
			)
		}
	</div>
}


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
				{(selectedType !== 'all')?[" for ", <b>{selectedType}</b> ," repositories"]:''}
				{(selectedLanguage !== 'all')?[" for ", <b>{selectedLanguage}</b> ," language"]:''}
				{(searchString !== '')?[" matching ", <b>{searchString}</b>]:''}

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

export {RepositoriesView}
