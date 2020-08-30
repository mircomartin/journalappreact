import {
	ACTIVE_NOTE,
	LOAD_NOTES,
	NEW_NOTE,
	UPDATE_NOTE,
} from './../types/index';

const initialState = {
	notes: [],
	activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ACTIVE_NOTE:
			return {
				...state,
				activeNote: action.payload,
			};
		case NEW_NOTE:
			return {
				...state,
				notes: [...state.notes, action.payload],
			};
		case LOAD_NOTES:
			return {
				...state,
				notes: action.payload,
			};
		case UPDATE_NOTE:
			return {
				...state,
				notes: state.notes.map(
					(note) => note.id === action.payload.id
						? action.payload
						: note
					),
				activeNote: null,
			};
		default:
			return state;
	}
};
