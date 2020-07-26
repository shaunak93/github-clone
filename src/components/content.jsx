import React from 'react';
import {UserProfile} from './userProfile/userProfile';
import {UserDetails} from './userDetails/userDetails';

function Content() {
	return <main>
		<UserProfile/>
		<UserDetails/>
	</main>;
}
export {Content}
