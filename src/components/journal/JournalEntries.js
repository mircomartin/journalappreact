import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { JournalEntry } from './JournalEntry';
import { startListNote } from '../../actions/notes';

export const JournalEntries = () => {
    const dispatch = useDispatch();
    const {notes} = useSelector(state => state.notes)

    useEffect(() => {
        dispatch(startListNote())
        // eslint-disable-next-line 
    }, [])

    return (
        <div className="journal__entries">
            
            {
                notes.map( note => (
                    <JournalEntry 
                        key={ note.id } 
                        {...note}
                    />
                ))
            }

        </div>
    )
}
