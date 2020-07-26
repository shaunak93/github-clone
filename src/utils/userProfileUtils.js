import Axios from 'axios';

const getUserProfile = (callback) => {
	Axios.get('https://api.github.com/users/supreetsingh247').then(
		(response)=>{callback(null, response)}
	).catch(
		(error)=>{callback(error)}
	)
}

export {getUserProfile};
