import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../actions/notes';
import moment from 'moment';
import { MobileScreenContext } from '../../context/MobileScreenContext';

export const NotesAppBar = () => {

    const {screenWidth, setActivateMobileStyles} = useContext(MobileScreenContext);
    
    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes)
    const noteDate = moment(note.date);

    const handleOpenSidebar = () => {
        if (screenWidth <= 645) {
            setActivateMobileStyles(true);
        }
    }
    
    const handleSave = () => {
        dispatch(startSaveNotes(note))
    }

    const handlePictureUpload = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = ({target}) => {
        const file = target.files[0];

        if (file) {
            dispatch(startUploading(file));
        }
    }
    
    return (
        <div className="notes__appbar">
            <div>
                <i 
                    className="fas fa-arrow-circle-left"
                    onClick={handleOpenSidebar}
                >
                </i>
                <span>{`${noteDate.format('MMMM Do, YYYY')}`}</span>
            </div>
            <input 
                id="fileSelector"
                type="file"
                name="file"
                style={{display: 'none'}}
                onChange={handleFileChange}
            />
            <div>
                <button 
                    className="btn"
                    onClick={handlePictureUpload}
                >
                    Picture
                </button>
                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}
