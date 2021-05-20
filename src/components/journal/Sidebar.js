import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MobileScreenContext } from '../../context/MobileScreenContext';
import { startLogout } from '../actions/auth';
import { startNewNote } from '../actions/notes';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.auth);
    const {screenWidth, activateMobileStyles, setActivateMobileStyles} = useContext(MobileScreenContext);

    const {name} = state;

    const handleLogout = () => {
        dispatch(startLogout());   
    }
    
    const handleAddEntry = () => {
        dispatch(startNewNote());

        if (screenWidth <= 645) {
            setActivateMobileStyles(false);
        }
    } 


    return (
        <aside 
            className="journal__sidebar"
            style={(!activateMobileStyles && screenWidth <= 645) ? {display: 'none'} : null}
        >
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> {name}</span>
                </h3>

                <button 
                    className="btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>

            <div 
                className="journal__new-entry"
                onClick={handleAddEntry}
                tabIndex="1"
            >
                <i className="far fa-calendar-plus fa-5x"></i>
                <p className="mt-5">
                    New entry
                </p>
            </div>

            <JournalEntries />

        </aside>
    )
}
