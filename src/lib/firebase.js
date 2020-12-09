import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/analytics'


export const firebaseConfig = {
    apiKey: "AIzaSyDnjxWXnr0KNTlMXPVbrgPKOdZuEDt70N8",
    authDomain: "blatherings-6c0a2.firebaseapp.com",
    databaseURL: "https://blatherings-6c0a2.firebaseio.com",
    projectId: "blatherings-6c0a2",
    storageBucket: "blatherings-6c0a2.appspot.com",
    messagingSenderId: "495236193781",
    appId: "1:495236193781:web:b3f641f7eb5cb258ead4bc",
    measurementId: "G-K945SCKCSH"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


const app = firebase.app();
const firestore = firebase.firestore()
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();



export {firestore, auth, provider};

console.log(app.name)
