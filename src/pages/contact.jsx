import App from '../components/App'
import {useEffect} from "react";
import firebase from "firebase";

export default function Contact() {
    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'Contact Page'})
    }, [])
    return (
        <App>
            <p>Contact Page</p>
        </App>
    )
}
