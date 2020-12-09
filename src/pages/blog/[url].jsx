import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import App from "../../components/App";
import Loading from "../../components/Loading";
import {analytics} from "../../lib/firebase";
import firebase from "firebase";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

function URL() {
    const router = useRouter();
    const { url } = router.query;
    const { data } = useSWR(`/api/blog/${url}`, fetcher);

    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: `${url}`})
    }, [])


    if (!data) {
        return (<App>
            <Loading/>
        </App>)

    }
    console.log(data)
    return (
        <App>
            <div className={'container-xl'}>
                <div className={'row justify-content-center mt-5 mb-5'}>
                    <div className={'col text-center'}>
                        <h1>{data.title}</h1>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html: data.body}}/>
            </div>
        </App>
    );
}

export default URL;
