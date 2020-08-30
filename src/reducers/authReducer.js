import { LOGIN, LOGOUT } from './../types/index';

export const authReducer = (state = {}, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				uid: action.payload.uid,
				name: action.payload.displayName,
			};
		case LOGOUT:
			return {};
		default:
			return state;
	}
};
