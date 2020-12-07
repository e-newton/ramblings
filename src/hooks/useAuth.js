import React, { useState, useEffect, useContext, createContext } from 'react';
import {auth} from '../lib/firebase'
import firebase from "firebase";

const authContext = createContext({user: {}});
const {Provider} = authContext

// You can wrap your _app.js with this provider
export function AuthProvider(props) {
    const auth = useProvideAuth();
    return <Provider value={auth}>{props.children}</Provider>;
}

// Custom React hook to access the context
export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    // Store the user in state
    const [user, setUser] = useState(null);

    const signinWithGoogle = () => {
        return firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(async (response) => {
                await setUser(response.user)
                console.log('raw repsonse', response.user)
                console.log('auth hook user repsonse', user)
                return response.user
            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => setUser(false));
    };

    const handleAuthStateChanged = (user) => {
        setUser(user);
    }

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(handleAuthStateChanged)
        return () => unsub();
    }, []);

    return {
        user,
        signinWithGoogle,
        signout
    };
}
