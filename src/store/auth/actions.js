import { firebase, googleAuthProvider } from '../firebase/firebase';
import types from "./types";

export const login = uid =>({ 
    type: types.LOGIN,
    payload: uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const logout = () =>({ 
    type: types.LOGOUT
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};