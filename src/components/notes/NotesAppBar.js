import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { startSaveNote } from '../../actions/notes'

export const NotesAppBar = () => {
    const {activeNote} = useSelector(state => state.notes)
    const dispatch = useDispatch();

    const noteDate = moment(activeNote.date);

    const handleSave = () => {
        dispatch(startSaveNote(activeNote))
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate.format('dddd')}</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button className="btn"
                onClick={handleSave}>
                    Save
                </button>
            </div>
        </div>
    )
}
