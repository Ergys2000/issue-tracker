import React, { useContext, useEffect } from 'react';
import {
	Switch,
	Route,
	Link,
	Redirect,
	useHistory,
	useRouteMatch
} from 'react-router-dom';

import { NavBar } from '../styled/Components';
import Projects from './Projects';
import Settings from './Settings';
import { AuthContext } from '../App';

/** The user page after log in */
const UserPage = () => {
	const history = useHistory();
	const authContext = useContext(AuthContext);
	useEffect(() => {
		if (!authContext.authenticated) {
			authContext.signOut();
			history.push("/");
		}
	});
	const { url, path } = useRouteMatch();
	return (
		<div className="flex flex-row w-full h-full bg-indigo-900 text-gray-200">
			<NavBar>
				<Link to={`${url}/home`}
					className="mt-auto flex flex-row justify-center group-hover:justify-start group-hover:mr-3
						hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">home</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Home</p>
				</Link>
				<Link to={`${url}/settings`} className="flex flex-row justify-center group-hover:justify-start 
					group-hover:mr-3 hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">settings</i>
					<p className="hidden group-hover:block mx-2">Settings</p>
				</Link>
				<Link to={`/`} className="mt-auto mb-2 flex flex-row justify-center 
					group-hover:mr-3 group-hover:justify-start hover:bg-purple-800 text-gray-300 p-4 rounded-r-xl">
					<i className="material-icons">logout</i>
					<p className="hidden group-hover:block mx-2 whitespace-nowrap">Log out</p>
				</Link>
			</NavBar>

			<Switch>
				<Route path={`${path}/projects`}>
					<Projects />
				</Route>

				<Route path={`${path}/settings`}>
					<Settings />
				</Route>

				<Route path={`${path}/`}>
					<Redirect to={`${url}/projects`} />
				</Route>

			</Switch>
		</div>
	);
}
export default UserPage;
