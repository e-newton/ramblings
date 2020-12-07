// This is just a page that will allow me to login and stuff
import {useState} from 'react';
import React from 'react';
import App from "../components/App";
import firebase from 'firebase'
import '../lib/firebase'
import {auth, provider, firestore} from '../lib/firebase'
import 'firebase/auth'
import {useAuth} from "../hooks/useAuth";


function Admin(props) {
    let auth = useAuth()
    const signIn = async () => {
        await auth.signinWithGoogle()
        console.log('auth user after login', auth.user)
    }

    const signOut = async () => {
        await auth.signout()

    }


    return (

        <App>
            <div className={"container-xl"}>
                <div className={"row justify-content-center"}>
                    <div className={'col text-center mb-0 m-5 '}>
                        <h1>If you aren't Eric, you shouldn't see this 🦞</h1>
                    </div>
                </div>
                <div className={"row justify-content-center"}>
                    <div className={'col text-center m-5'}>
                        <button className={'btn btn-primary'} onClick={signIn}>Login</button>
                    </div>
                </div>
                {auth.user &&
                <div className={"row justify-content-center"}>
                    <div className={'col text-center m-5'}>
                        <h1>Hello {auth.user.displayName}</h1>
                        <button className={'btn btn-primary'} onClick={signOut}>Logout</button>
                    </div>
                </div>
                }





            </div>
        </App>
    );
}

export default Admin;
