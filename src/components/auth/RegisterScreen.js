import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux';

import { useForm } from '../../hooks/useForm';
import { setError, removeError } from '../../actions/ui';
import { startCreateNewUser } from '../../actions/auth';

export const RegisterScreen = () => {
	const { msgError } = useSelector((state) => state.ui);
    const dispatch = useDispatch();

	const [formValues, handleInputChange, reset] = useForm({
		name: 'mirco',
		email: 'mirco@mirco.com',
		password: '123456',
		password2: '123456',
	});

	const { name, email, password, password2 } = formValues;

	const handleCreateAccount = (e) => {
		e.preventDefault();

		//validar
		if (isFormValid()) {
            console.log('todo ok');
            

            //Dispatch del nuevo usuario
			dispatch(startCreateNewUser(formValues))
		}

		//reset del formulario
		reset();
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			dispatch(setError('Name is required'));
			return false;
		} else if (!validator.isEmail(email)) {
			dispatch(setError('Email is not valid'));
			return false;
		} else if (password !== password2) {
			dispatch(setError('Password 1 is not matched with password 2'));
			return false;
		} else if (password.trim().length < 5) {
			dispatch(setError('The password must to have 6 o more characters'));
			return false;
		}

        dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>

			<form onSubmit={handleCreateAccount}>

				{msgError && (
					<div className="auth__alert-error">{msgError}</div>
				)}

				<input
					type="text"
					placeholder="Name"
					name="name"
					value={name}
					onChange={handleInputChange}
					className="auth__input"
					autoComplete="off"
				/>

				<input
					type="text"
					placeholder="Email"
					name="email"
					value={email}
					onChange={handleInputChange}
					className="auth__input"
					autoComplete="off"
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					value={password}
					onChange={handleInputChange}
					className="auth__input"
				/>

				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					value={password2}
					onChange={handleInputChange}
					className="auth__input"
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block mb-5"
				>
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
