import React, {useState, useEffect} from 'react';
import {UserNameCard, UserDescription, UserFollowSection, UserSocialStatus, UserLocationCard, UserMailCard} from './userProfileComponents';
import {Loader, ErrorPanel} from '../common';
import {getUserProfile} from '../../utils/userProfileUtils';

function UserProfile(){
	let defaultProfile = {
		"login": "supreetsingh247",
		"id": 7427552,
		"node_id": "MDQ6VXNlcjc0Mjc1NTI=",
		"avatar_url": "https://avatars1.githubusercontent.com/u/7427552?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/supreetsingh247",
		"html_url": "https://github.com/supreetsingh247",
		"followers_url": "https://api.github.com/users/supreetsingh247/followers",
		"following_url": "https://api.github.com/users/supreetsingh247/following{/other_user}",
		"gists_url": "https://api.github.com/users/supreetsingh247/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/supreetsingh247/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/supreetsingh247/subscriptions",
		"organizations_url": "https://api.github.com/users/supreetsingh247/orgs",
		"repos_url": "https://api.github.com/users/supreetsingh247/repos",
		"events_url": "https://api.github.com/users/supreetsingh247/events{/privacy}",
		"received_events_url": "https://api.github.com/users/supreetsingh247/received_events",
		"type": "User",
		"site_admin": false,
		"name": "Supreet Singh",
		"company": "Target Corporation",
		"blog": "",
		"location": "India",
		"email": null,
		"hireable": null,
		"bio": "Front end developer since 1.5 years",
		"twitter_username": null,
		"public_repos": 12,
		"public_gists": 0,
		"followers": 6,
		"following": 2,
		"created_at": "2014-04-28T09:44:57Z",
		"updated_at": "2020-06-08T19:15:30Z"
	}
	const [profile, setProfile] = useState(defaultProfile);
	const [isLoading, setIsLoading] = useState(true);
	const [hasError, setHasError] = useState(false)
	useEffect(()=>{
		getUserProfile((error, response)=>{
			setIsLoading(false)
			if(error){
				setHasError(true);
			}
			else{
				setProfile((response && response.data) || {})
			}
		})
	},[])

	return <div className="user-profile">
		{isLoading
			?<Loader/>
			:(hasError
				?<ErrorPanel/>
				:<>
					<div className="user-profile-item">
						<UserNameCard
							url={profile.avatar_url}
							name={profile.name}
							nickName={profile.login}
						/>
					</div>
					<div className="user-profile-item">
						<UserDescription
							description={profile.bio}
						/>
					</div>
					<div className="user-profile-item">
						<UserFollowSection/>
					</div>
					<div className="user-profile-item">
						<UserSocialStatus
							followers = {profile.followers || 0}
							following = {profile.following || 0}
							stars = {profile.stars || 7}
						/>
					</div>
					<div className="user-profile-item">
						<UserLocationCard
							country = {profile.location}
							company = {profile.company}
						/>
					</div>
					<div className="user-profile-item">
						<UserMailCard
							mail = {profile.email || "supreetsingh.247@gmail.com"}
						/>
					</div>
				</>
			)
		}
	</div>;
}

export {UserProfile};
