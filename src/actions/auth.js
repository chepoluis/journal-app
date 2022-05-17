import { getAuth, signInWithPopup } from 'firebase/auth';
import { googleAuthProvider, firebase } from '../firebase/firebase-config';
import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Luis'));
        }, 3500);
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then(({user}) => {
                dispatch(login(user.uid, user.displayName))
            })
        // const auth = getAuth();
        // signInWithPopup(auth, googleAuthProvider)
        //     .then((user) => {
        //         console.log(user)
        //         // dispatch(login(user.uid, user.displayName))
        //     });
    }
}

export const login = (uid, displayName) => ({ // Se coloca sin el return porque esta implicito y solo se regresa un solo objeto
    type: types.login,
    payload: {
        uid,
        displayName
    }
})