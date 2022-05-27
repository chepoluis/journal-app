import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../../actions/auth';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

      firebase.auth().onAuthStateChanged( (user) => {

        if (user?.uid) {
          dispatch( login(user.uid, user.displayName) );

          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);        
        }

        setChecking(false);
      });
      
    }, [dispatch]);

    if (checking) {
      // Se podria colocar un compomente mas bonito :)
      return (
        <h1>Loading...</h1>
      )
    }

    return (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/auth" component={ AuthRouter } />

            <Route exact path="/" component={ JournalScreen } />

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    )
}
