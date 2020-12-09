import App from '../components/App'
import React, {useEffect} from "react";
import firebase from "firebase";
import Image from "next/image";

export default function About() {
    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'About Page'})
    }, [])
    return (

        <App>
            <div className={'container-xl mt-2'}>
                <div className={'row justify-content-center'}>
                    <div className={'col text-center'}>
                        <h1>About</h1>
                    </div>
                </div>
                <div className={'row justify-content-center'}>
                    <div className={'col-5 rounded d-flex justify-content-center'}>
                        {/*Some picture of my ugly mug*/}
                        <Image className={'rounded border-primary'}
                               src = "/35672855.jpeg"
                               alt="Picture of the author"
                               width={'300vmax'}
                               height={'300vmax'}/>


                    </div>
                </div>
                    <div className={'row justify-content-center mt-4'}>
                        <div className={'col-8'}>
                            <p>Hi, I'm Eric! I'm currently a fourth year Computer Science student studying at the
                            University of British Columbia in Vancouver, BC. Before studying at UBC, I was a student at
                                Langara College majoring in Microbiology. I have been a teaching assistant with the
                            faculty of Computer Science for the past 2 years, and am currently working as a Web Developer
                            we BCEdAccess. I have previously worked with the UBC faculty of science as a Bioinformatics
                            Research Assistant tracking drug resistance in Hepatitis C.</p>
                        </div>
                    </div>

            </div>

        </App>
    )
}
