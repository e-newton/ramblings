import App from '../components/App'
import {useEffect} from "react";
import firebase from "firebase";

export default function About() {
    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'About Page'})
    }, [])
  return (

    <App>
        <h1>About</h1>
    </App>
  )
}
