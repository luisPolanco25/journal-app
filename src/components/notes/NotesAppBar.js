import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNotes, startUploading } from '../actions/notes';
import moment from 'moment';

export const NotesAppBar = () => {
    
    const dispatch = useDispatch();
    const {active:note} = useSelector(state => state.notes)
    const noteDate = moment(note.date);


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
            <span>{`Created on ${noteDate.format('MMMM Do, YYYY')}`}</span>
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
