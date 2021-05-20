import React, { useEffect, useState } from 'react';
import {Provider} from 'react-redux';
import { store } from './store/store';
import { AppRouter } from './routers/AppRouter';
import { MobileScreenContext } from './context/MobileScreenContext';

export const JournalApp = () => {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [activateMobileStyles, setActivateMobileStyles] = useState(true);
    const updateWidth = () => {
        setScreenWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        
        return () => window.removeEventListener("resize", updateWidth);
    }, [])
        console.log(activateMobileStyles);
    return (
        <Provider store={ store }>
            <MobileScreenContext.Provider value={{screenWidth, activateMobileStyles, setActivateMobileStyles}}>
                <AppRouter />
            </MobileScreenContext.Provider>
        </Provider>
    )
}
