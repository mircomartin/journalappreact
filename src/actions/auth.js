import Swal from 'sweetalert2';

import { LOGIN, LOGOUT } from './../types/index';
import { firebase, googleAuthProvider } from './../firebase/firebase-config';
import { startLoading, finishLoading } from './ui';

//async functions
export const startLoginEmailAndPassword = (email, password) => {
	return async (dispatch) => {
		dispatch(startLoading());
		try {
			const { user } = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);

			dispatch(login(user.uid, user.displayName));
			dispatch(finishLoading());
        } catch (error) {
            console.log(error);
            dispatch(finishLoading());
            Swal.fire('Error', error.message, 'error');
        }

	};
};

export const startLoginWithGoogle = () => {
	return async (dispatch) => {
		try {
			const { user } = await firebase
				.auth()
				.signInWithPopup(googleAuthProvider);
			dispatch(login(user.uid, user.displayName));
		} catch (error) {
			console.log(error);
		}
	};
};

export const startCreateNewUser = (newUser) => {
	const { email, password, name } = newUser;

	return async (dispatch) => {
		try {
			const resp = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);

			const { user } = resp;

			await user.updateProfile({ displayName: name });

			dispatch(login(user.uid, user.displayName));
		} catch (error) {
            console.log(error);
            Swal.fire('Error', error.message, 'error');

		}
	};
};

export const startLogout = () => {
    return async (dispatch) => {
        try {

            await firebase.auth().signOut();
            dispatch(logout());

        } catch (error) {
            console.log(error)
        }
    }
}

//modificaciones del reducer localmente
export const login = (uid, displayName) => ({
	type: LOGIN,
	payload: {
		uid,
		displayName,
	},
});

export const logout = () => ({
	type: LOGOUT,
});
