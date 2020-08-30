import { SET_ERROR, REMOVE_ERROR, START_LOADING, FINISH_LOADING } from './../types/index';

const initialState = {
    loading: false,
    msgError: null,
}

export const uiReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ERROR:
			return {
                ...state,
				msgError: action.payload,
			};
		case REMOVE_ERROR:
			return {
                ...state,
				msgError: null,
            };
        case START_LOADING:
            return {
                ...state,
                loading: true,
            };
        case FINISH_LOADING:
            return {
                ...state,
                loading: false,
            };
		default:
			return state;
	}
};