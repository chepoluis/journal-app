import { types } from "../types/types";

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Luis'));
        }, 3500);
    }
}

export const login = (uid, displayName) => ({ // Se coloca sin el return porque esta implicito y solo se regresa un solo objeto
    type: types.login,
    payload: {
        uid,
        displayName
    }
})