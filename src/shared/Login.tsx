import React, { useContext, useState } from 'react';
import {
	useHistory,
} from 'react-router-dom';
import { AuthContext } from '../App';
import { Input, ActionButton, Form, Label } from '../styled/Components';

const Login = () => {
	const history = useHistory();
	const authContext = useContext(AuthContext);

	const [form, setForm] = useState({
		email: "",
		password: ""
	});

	const onSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (form.email === "test" && form.password === "test") {
			authContext.signIn(1, "lskdajfalksdjalskdjf");
			/* Go to the user page */
			history.push(`/u/${1}`);

			/* Set a timeout for when to log the user out of 1 hour */
			setTimeout(() => {
				alert("Your session has expired, please re-login!");
				authContext.signOut();
				history.push('/');
			}, 60 * 60 * 1000);
		}
	}

	const onChange = (event: React.ChangeEvent) => {
		event.preventDefault();
		const { name, value } = event.target as any;
		setForm({ ...form, [name]: value });
	}

	return (
		<div className="bg-indigo-900 m-auto w-9/12 rounded-lg px-10 pt-10 text-center min-w-max max-w-4xl shadow-lg text-gray-300">
			<p className="text-2xl"><b>Issue Tracker Login</b></p>
			<Form>
				<Label>
					Email:
					<Input
						name="email"
						value={form.email}
						onChange={onChange}
						type="text" />
				</Label>
				<Label>
					Password:
					<Input
						name="password"
						value={form.password}
						onChange={onChange}
						type="password" />
				</Label>
				<ActionButton className={"px-3 py-2 m-3"}
					onClick={onSubmit}>
					Log in
				</ActionButton>
			</Form>
		</div>
	);
}

export default Login;
