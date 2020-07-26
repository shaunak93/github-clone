
function filterByType(repos, type){
	return repos.filter((repo)=>{
		switch(type){
			case 'all':
				return true;
			case 'source':
				return !repo.fork;
			case 'fork':
				return repo.fork;
			case 'archived':
				return repo.archived;
			case 'mirror':
				return repo.mirror_url;
			default:
				return true;
		}
	})
}
function filterByLanguage(repos, type){
	if(type === 'all'){
		return repos;
	}
	return repos.filter((repo)=>{
		return repo.language === type;
	})
}
function filterBySearchString(repos, searchString){
	let searchStringTemp = (searchString || '').toLowerCase();
	if(searchStringTemp === ''){
		return repos;
	}
	return repos.filter((repo)=>{
		return repo.name.includes(searchStringTemp);
	})
}
function getDotColor(language){
	switch(language){
		case 'HTML':
			return '#e34c26';
		case 'JavaScript':
			return '#f1e05a';
		case 'CSS':
			return '#563d76';
		default:
			return 'grey'
	}
}

export {filterByType, filterByLanguage, filterBySearchString, getDotColor}
