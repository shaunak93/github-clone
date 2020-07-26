import Axios from 'axios';

const CONFIGS = {
	REPO_TYPES : [
		{text: 'All', value: 'all'},
		{text: 'Sources', value: 'source'},
		{text: 'Forks', value: 'fork'},
		{text: 'Archived', value: 'archived'},
		{text: 'Mirrors', value: 'mirror'}
	]
}

const getUserRepositories = (callback) => {
	Axios.get('https://api.github.com/users/supreetsingh247/repos').then(
		(response)=>{callback(null, response)}
	).catch(
		(error)=>{callback(error)}
	)
}

export {CONFIGS, getUserRepositories};
