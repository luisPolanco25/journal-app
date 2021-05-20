import React, { useContext } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../actions/notes';
import { MobileScreenContext } from '../../context/MobileScreenContext';

export const JournalEntry = ({id, date, title, body, url}) => {
    
    const noteDate = moment(date);
    const dispatch = useDispatch();
    const {screenWidth, setActivateMobileStyles} = useContext(MobileScreenContext);

    const handleEntryClick = () => {
        dispatch(activeNote(id, {date, title, body, url}));

        if (screenWidth <= 645) {
            setActivateMobileStyles(false);
        }
    }
    
    return (
        <div 
            className="journal__entry pointer animate__animated animate__backInRight"
            onClick={handleEntryClick}
            tabIndex="1"
        >

            {

                (url) 
                &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${url})`,
                    }}
                >
                </div>

            }
            
            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {`${body.substring(0, 40)}${(body) ? '...' : ''}`}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{noteDate.format('MMMM Do')}</span>
                <h4>{noteDate.format('YYYY')}</h4>
            </div>
        </div>
    )
}
