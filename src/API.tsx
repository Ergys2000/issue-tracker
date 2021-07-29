import { Project, Issue, Comment, User } from './types/Common';

type ApiResponse = {
	status: string;
	result: null | any[] | any;
	message: string | null;
};

const getUserInfo = (userId: number, jwtToken: string): Promise<User> => {
	return new Promise((resolve, reject) => {
		resolve({
			id: userId,
			firstname: "Ergys",
			lastname: "Rrjolli",
			email: "test",
			password: "test"
		});
	});
}

const putUserInfo = (user: User, jwtToken: string): Promise<ApiResponse> => {
	return new Promise((resolve, reject) => {
		resolve({
			status: "OK", 
			result: null,
			message: "User updated!"
		});
	});
}

/** Gets the projects of a user
* @function getUserProjects
* @param userId - The id of the user
* @param jwtToken - The api token
* @returns {Project[]} List of user projects
* */
const getUserProjects = (userId: number, jwtToken: string): Promise<Project[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
			{ id: 1, title: "Personal Project", ownerId: 1, createdOn: new Date("2021-2-3") },
		]);
	});
}

/** Gets the issues of a project
* @function getUserProjects
* @param userId - The id of the user
* @param jwtToken - The api token
* @param projectId - The id of the project
* @returns {Promise} Promise which resolves with a list of issues
* */
const getProjectAllIssues = (userId: number, jwtToken: string, projectId: number): Promise<Issue[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "open",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "closed",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "closed",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title, this is a long title that should not be rendered completely",
				description: "Issue descriptions, this is a long description, that should not be rendered completely.",
				status: "open",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
		]);
	});
}

/** Gets the closed issues of a project
* @function getProjectOpenIssues
* @param userId - The id of the user
* @param jwtToken - The api token
* @param projectId - The id of the project
* @returns {Promise} Promise which resolves with a list of issues
* */
const getProjectOpenIssues = (userId: number, jwtToken: string, projectId: number): Promise<Issue[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "open",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title, this is a long title that should not be rendered completely",
				description: "Issue descriptions, this is a long description, that should not be rendered completely.",
				status: "open",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
		]);
	});
}

/** Gets the closed issues of a project
* @function getProjectClosedIssues
* @param userId - The id of the user
* @param jwtToken - The api token
* @param projectId - The id of the project
* @returns {Promise} Promise which resolves with a list of issues
* */
const getProjectClosedIssues = (userId: number, jwtToken: string, projectId: number): Promise<Issue[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "closed",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "closed",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
		]);
	});
}


/** Gets the user issues of a project
* @function getProjectUserIssues
* @param userId - The id of the user
* @param jwtToken - The api token
* @param projectId - The id of the project
* @returns {Promise} Promise which resolves with a list of issues
* */
const getProjectUserIssues = (userId: number, jwtToken: string, projectId: number): Promise<Issue[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "closed",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "high",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
			{
				id: 1,
				projectId: 2,
				title: "Title",
				description: "Issue description",
				status: "open",
				reporterId: 2,
				reporter: "Ergys Rrjolli",
				asigneeId: 2,
				asignee: "Ergys Rrjolli",
				priority: "medium",
				createdOn: new Date(Date.now()),
				deadline: new Date("2021-4-21")
			},
		]);
	});
}

/** Add a project issue
* @function postProjectIssue
* @param userId {number} The user id
* @param jwtToken {string} The authentication token
* @param projectId {number} The project Id
* @param issue {number} The issue id
* @returns {Promise} Promise which resolves with an api response
* */
const postProjectIssue = (userId: number, jwtToken: string, issue: Issue): Promise<ApiResponse> => {
	return new Promise((resolve, reject) => {
		resolve({ status: "OK", result: null, message: "Issue added" });
	});
}

/** Updates a project issue
* @function putProjectIssue
* @param userId {number} The user id
* @param jwtToken {string} The authentication token
* @param projectId {number} The project Id
* @param issueId {number} The issue id
* @returns {Promise} Promise which resolves with an api response
* */
const putProjectIssue = (userId: number, jwtToken: string, issue: Issue): Promise<ApiResponse> => {
	return new Promise((resolve, reject) => {
		resolve({ status: "OK", result: null, message: "Issue updated" });
	});
}

/** Gets the comments of an issue
* @function getProjectIssueComments
* @param userId {number} The user id 
* @param jwtToken {string} The jwt token
* @param projectId {number} The id of the project
* @param issueId {number} The id of the issue
* @returns {Promise} Promise which resolves with a list of issue comments
* */
const getProjectIssueComments = (userId: number, jwtToken: string, projectId: number, issueId: number): Promise<Comment[]> => {
	return new Promise((resolve, reject) => {
		resolve([
			{
				id: 1,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 2,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 3,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 4,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 5,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 6,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 7,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 8,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 9,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
			{
				id: 10,
				userId: 2,
				author: "Ergys Rrjolli",
				comment: "This is a comment on the issue"
			},
		]);
	});
}

const postProjectIssueComment = (userId: number, jwtToken: string, issueId: number, comment: String): Promise<any> => {
	return new Promise((resolve, reject) => {
		resolve({
			status: "OK",
			result: {
				id: 100,
				userId: userId,
				author: "Ergys Rrjolli",
				comment: comment
			},
			message: "The comment was successfully added!"
		});
	});
}

export {
	putUserInfo,
	getUserInfo,
	getUserProjects,
	getProjectAllIssues,
	getProjectOpenIssues,
	getProjectClosedIssues,
	getProjectUserIssues,
	postProjectIssue,
	putProjectIssue,
	getProjectIssueComments,
	postProjectIssueComment,
};
