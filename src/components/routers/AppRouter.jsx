import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';

import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { JournalScreen } from '../journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { loadNotes } from '../../helpers/loadNotes';
import { setNotes } from '../../actions/notes';

export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

      firebase.auth().onAuthStateChanged( async (user) => {

        if (user?.uid) {
          dispatch( login(user.uid, user.displayName) );
          setIsLoggedIn(true);

          const notes = await loadNotes( user.uid );
          dispatch( setNotes(notes) );

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

            <PublicRoute 
              path="/auth"
              component={ AuthRouter }
              isAuthenticated={ isLoggedIn }
            />

            <PrivateRoute
              exact
              path="/"
              component={ JournalScreen }
              isAuthenticated={ isLoggedIn }
            />

            {/* <Route exact path="/" component={ JournalScreen } /> */}

            <Redirect to="/auth/login" />
          </Switch>
        </div>
      </Router>
    )
}
