import React, { useState, useEffect, useContext, createContext } from 'react';
import {auth, firestore} from '../lib/firebase'
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
                let resUser = await firestore.collection('users').doc(response.user.uid).get()
                if (resUser.exists){
                    console.log('should only login here?')
                    await setUser(response.user)
                    return response.user
                } else{
                    setUser(false)
                    return false
                }

            });
    };

    const signout = () => {
        return firebase
            .auth()
            .signOut()
            .then(() => setUser(false));
    };

    const handleAuthStateChanged = async(user) => {
        if(user){
            let resUser = await firestore.collection('users').doc(user.uid).get()
            if(resUser.exists){
                setUser(user);
            }
        }
        else{
            setUser(false)
        }

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
