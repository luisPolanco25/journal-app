import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { MobileScreenContext } from '../../context/MobileScreenContext';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidebar } from './Sidebar';

export const JournalScreen = () => {

    const {screenWidth, activateMobileStyles} = useContext(MobileScreenContext);
    const {active} = useSelector(state => state.notes);
    
    return (
        <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
            <Sidebar />

            <main
                style={(activateMobileStyles && screenWidth <= 645) ? {display: 'none'} : null}
            >

                {
                    (active)
                        ? 
                            <NoteScreen />
                        : 
                            <NothingSelected />
 
                }
                
            </main>
        </div>
    )
}
