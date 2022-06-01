import Swal from 'sweetalert2';
import { googleAuthProvider, firebase } from '../firebase/firebase-config';
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch( startLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(({ user }) => {
                dispatch( login( user.uid, user.displayName ) )
            }).catch(err => {
                console.error(err);
                Swal.fire('Error', err.message, 'error');
            }).finally(() => {
                dispatch( finishLoading() );
            })
        
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => {
    return ( dispatch ) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async ({ user }) => {

                await user.updateProfile({ displayName: name });

                // console.log(user.uid, user.displayName);

                dispatch(
                    login( user.uid, user.displayName )
                )
            })
            .catch(e => {
                console.error(e);
                Swal.fire('Error', e.message, 'error');
            });
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

export const startLogout = () => {
    return async ( dispatch ) => {
        await firebase.auth().signOut();

        dispatch( logout() );
    }
}

export const logout = () => ({
    type: types.logout
})
