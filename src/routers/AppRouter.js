import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../components/actions/auth';
import { LoadingScreen } from '../components/loading/LoadingScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import {startLoadingNotes} from '../components/actions/notes'

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    useEffect(() => {
        firebase.auth().onAuthStateChanged( async(user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }

            setChecking(false);

        });
    }, [dispatch, setChecking, setIsLoggedIn])
    
    if (checking) {
        return (
            <LoadingScreen />
        )
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isLoggedIn={isLoggedIn}
                    />

                    <PrivateRoute
                        exact path="/" 
                        component={JournalScreen}
                        isLoggedIn={isLoggedIn}
                    />

                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    )
}
