import { useEffect, useState, useContext } from 'react';
import { Switch, Route, useHistory, useRouteMatch } from 'react-router-dom';
import { ContentPage, ContentPageContext } from '../styled/Components';
import { getUserProjects } from '../API';
import { Project } from '../types/Common';
import { AuthContext } from '../App';
import ProjectView from './ProjectView';
import {Popup, Form, Label, Input, ActionButton} from '../styled/Components';

/** The projects page
* @function Projects 
* @returns The projects page of the user 
* */
const Projects = () => {
	const [addProject, setAddProject] = useState(false);
	const { path } = useRouteMatch();
	return (
		<ContentPage>
			<div className="mx-10 mt-2">
				{!addProject ? <ActionButton className="p-2" onClick={() => setAddProject(true)}><i className="material-icons">add</i></ActionButton> : null}
				{addProject ? <AddProject close={() => setAddProject(false)} /> : null}
			</div>
			<Switch>
				<Route path={`${path}/:projectId`}>
					<ProjectView />
				</Route>

				<Route path={`${path}/`}>
					<ProjectList />
				</Route>
			</Switch>
		</ContentPage>
	);
}

const AddProject = (props: any) => {
	const [project, setProject] = useState<Project>({
		id: 0,
		title: "",
		ownerId: 0,
		createdOn: new Date(),
	});
	return (
		<Popup>
			<div className="flex flex-col justify-start w-1/2 min-w-min min-h-screen m-auto bg-gray-200 p-5 text-gray-800">

				<div className="flex flex-row justify-center">
					<p className="font-bold flex-1 text-lg text-center">Add new issue</p>
					<i onClick={props.close} className="material-icons cursor-pointer text-gray-600 hover:text-gray-800">close</i>
				</div>
				<Form>
					<Label>
						Title:
						<Input name="title" value={project.title} onChange={onChange} />
					</Label>
					<ActionButton className="p-3 w-24">Add</ActionButton>
				</Form>

			</div>
		</Popup>
	);
}

/** The project list
* @function ProjectList
* @returns The project list component
* */
const ProjectList = () => {
	const authContext = useContext(AuthContext);
	const { url } = useRouteMatch();

	const contentPageContext = useContext(ContentPageContext);
	useEffect(() => {
		const locationList = [{ title: "Projects", url: url }];
		contentPageContext.setLocationList(locationList);
	}, []);

	const [projects, setProjects] = useState<Project[]>([]);
	useEffect(() => {
		getUserProjects(authContext.userId, authContext.jwtToken)
			.then(result => setProjects(result))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="flex flex-row flex-wrap">
			{projects.map(project => <ProjectItem key={project.id} project={project} />)}
		</div>
	);
}

/** Renders a single project in the project list
* @function ProjectItem 
* @param {Object} props - The component props
* @param {Project} props.project - The project the component renders
* @returns A single project in the project list
* */
const ProjectItem = (props: { project: Project }) => {
	const history = useHistory();
	const { url } = useRouteMatch();
	const style = {
		backgroundImage: "url(\"https://trello-backgrounds.s3.amazonaws.com/SharedBackground/480x288/d66341461e7242308038b96e502b60b9/photo-1620207418302-439b387441b0.jpg\")"
	}
	return (
		<div
			onClick={() => history.push(`${url}/${props.project.id}`)}
			style={style}
			className="flex flex-col items-center hover:cursor-pointer w-40 h-20 bg-gray-400 m-5 p-2 rounded-lg bg-cover">
			<p className="text-white">{props.project.title}</p>
		</div>
	);
}

export default Projects;
