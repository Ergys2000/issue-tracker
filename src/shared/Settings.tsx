import { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { ContentPage, ContentPageContext } from '../styled/Components';
import { Form, Label, Input, ActionButton } from '../styled/Components';
import { AuthContext } from '../App';
import { User } from '../types/Common';
import { getUserInfo, putUserInfo } from '../API';

const Settings = (props: any) => {
	return (
		<ContentPage>
			<UserInfo />
		</ContentPage>
	);
}

const UserInfo = (props: any) => {
	const { url } = useRouteMatch();

	const contentPageContext = useContext(ContentPageContext);

	useEffect(() => {
		contentPageContext.setLocationList([
			{ title: "Settings", url: url }
		]);
	}, []);

	const { userId, jwtToken } = useContext(AuthContext);
	const [user, setUser] = useState<User>({
		id: userId,
		firstname: "",
		lastname: "",
		email: "",
		password: ""
	});
	useEffect(() => {
		getUserInfo(userId, jwtToken)
			.then(user => {
				setUser(user)
			}).catch(err => console.log(err));
	}, []);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		const { name, value } = event.target;
		setUser({ ...user, [name]: value });
	}

	const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		putUserInfo(user, jwtToken).then(res => {
			alert(res.message);
		}).catch(err => console.log(err));
	}

	return (
		<div className="bg-white m-5 p-5">
			<Form onSubmit={onSubmit}>
				<Label>
					Firstname:
					<Input onChange={onChange} name="firstname" value={user.firstname} type="text" />
				</Label>
				<Label>
					Lastname:
					<Input onChange={onChange} name="lastname" value={user.lastname} type="text" />
				</Label>
				<Label>
					Email:
					<Input onChange={onChange} name="email" value={user.email} type="text" />
				</Label>
				<Label>
					Password:
					<Input onChange={onChange} name="password" value={user.password} type="text" />
				</Label>
				<ActionButton className="p-5">Update</ActionButton>
			</Form>
		</div>
	);
}

export default Settings;
