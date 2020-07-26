import React , {useState, useEffect} from 'react';
import {Loader, ErrorPanel} from '../common';
import {Repositories, FilterResultCount} from './repositoryViewComponents';
import {getUserRepositories} from '../../utils/userRepositoriesUtils';
import {filterByType, filterByLanguage, filterBySearchString} from './repositoriesViewUtils';
import {CONFIGS} from '../../utils/userRepositoriesUtils';

function RepositoriesView(){
	const [repositories, setRepositories] = useState([]);
	const [languageOptions, setLangugeOptions] = useState([{text: 'Language: All', value: 'all'}])
	const [typeOptions, setTypeOptions] = useState([{text: 'Type: All', value: 'all'}])
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
		let languageOptions = [{text: (selectedLanguage==='all')?'Language: All':'', value: 'all'}];
		let languageSet = new Set();
		repositories.forEach((repo) => {
			if(repo.language){
				languageSet.add(repo.language)
			}
		});
		for (let language of languageSet){
			languageOptions.push({text: (selectedLanguage===language)?'Language: '+language:language, value: language})
		}
		setLangugeOptions(languageOptions);
	},[repositories, selectedLanguage])

	useEffect(() => {
		let typeOptions = [];
		CONFIGS.REPO_TYPES.map((repoType)=>{
			typeOptions.push({
				text: (selectedType===repoType.value)?'Type: '+repoType.text:repoType.text,
				value: repoType.value,
			})
		})
		setTypeOptions(typeOptions);
	},[selectedType])

	return <div className="repositories-view-container">
		{isLoading
			?<Loader/>
			:(hasError
				?<ErrorPanel/>
				:<>
					<div className="repositories-form">
						<div>
							<input type="text" placeholder="Find a repository..." value={searchString} onChange={(event)=>{setSearchString(event.target.value)}}></input>
						</div>
						<div>
							<select value={selectedType} onChange={(event)=>{setSelectedType(event.target.value)}}>
								{typeOptions.map((opt)=><option key={'type_'+opt.value} value={opt.value}>{opt.text}</option>)}
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


export {RepositoriesView}
