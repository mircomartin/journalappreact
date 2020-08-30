import Swal from 'sweetalert2';
import {
	ACTIVE_NOTE,
	LOAD_NOTES,
	NEW_NOTE,
	UPDATE_NOTE,
} from './../types/index';
import { db } from '../firebase/firebase-config';
import { loadNotes } from './../helpers/loadNotes';

export const startNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		try {
			const newNote = {
				title: '',
				body: '',
				date: new Date().getTime(),
			};

			const doc = await db
				.collection(`${uid}/journal/notes/`)
				.add(newNote);

			dispatch(createNote(doc.id, newNote));
		} catch (error) {
			console.log(error);
		}
	};
};

export const startListNote = () => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		try {
			const notes = await loadNotes(uid);

			dispatch(setNotes(notes));
		} catch (error) {
			console.log(error);
		}
	};
};

export const startSaveNote = (activeNote) => {
	return async (dispatch, getState) => {
		const uid = getState().auth.uid;

		try {
			if (!activeNote.url) {
				delete activeNote.url;
			}

			await db
				.doc(`${uid}/journal/notes/${activeNote.id}`)
				.update(activeNote);

			dispatch(updateNote(activeNote));
			Swal.fire('Saved', activeNote.title, 'success')
		} catch (error) {
			console.log(error);
		}
	};
};

//No async
export const activeNote = (note) => ({
	type: ACTIVE_NOTE,
	payload: note,
});

const setNotes = (notes) => ({
	type: LOAD_NOTES,
	payload: notes,
});

const createNote = (id, note) => ({
	type: NEW_NOTE,
	payload: {
		id,
		...note,
	},
});

const updateNote = (note) => ({
	type: UPDATE_NOTE,
	payload: note,
});
