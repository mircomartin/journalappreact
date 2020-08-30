import React from 'react';
import { useSelector } from 'react-redux';

import { Sidebar } from './Sidebar';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';


export const JournalScreen = () => {
    const {activeNote} = useSelector(state => state.notes)
    return (
        <div className="journal__main-content">
            
            <Sidebar />

            <main>
                {
                    activeNote 
                    ? (<NoteScreen />)
                    : (<NothingSelected />)
                }
                
            </main>


        </div>
    )
}
