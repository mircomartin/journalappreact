import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm'
import { activeNote } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const {activeNote:note} = useSelector(state => state.notes)

    const [formValues, handleInputChange, reset] = useForm(note)

    const { title, body } = formValues;

    const activeId = useRef(note.id)

    useEffect(() => {
        if ( note.id !== activeId.current ) {
            reset( note )
            activeId.current = activeId.id
        }
        // eslint-disable-next-line
    }, [note])

    useEffect(() => {
        dispatch(activeNote(formValues))
        // eslint-disable-next-line
    }, [formValues]);

    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">

                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="notes__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>

                {activeNote.url && 
                (<div className="notes__image">
                    <img 
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    />
                </div>)}
            </div>

        </div>
    )
}
