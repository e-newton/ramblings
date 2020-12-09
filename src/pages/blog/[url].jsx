import React, {useEffect} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import App from "../../components/App";
import Loading from "../../components/Loading";
import {analytics, firestore} from "../../lib/firebase";
import firebase from "firebase";
import {useAuth} from "../../hooks/useAuth";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

function URL() {
    const router = useRouter();
    const { url } = router.query;
    const { data } = useSWR(`/api/blog/${url}`, fetcher);
    const auth = useAuth();

    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: `${url}`})
    }, [])


    if (!data) {
        return (<App>
            <Loading/>
        </App>)

    }

    const edit = async() => {
        if (auth.user){
            await router.push(`${url}/edit`)
        }
    }

    const deleteBlog = async() => {
        if(auth.user && url){
            await firestore
                .collection('blogs')
                .doc(url)
                .delete()
            await router.push(`../blog`)

        }
    }
    console.log(data)
    return (
        <App>
            <div className={'container-xl'}>
                { auth.user &&
                    <div className={'row justify-content-center'}>
                        <div className={'col-2 text-center'}>
                            <button className={'btn btn-secondary w-100'} onClick={edit}>Edit</button>
                        </div>
                        <div className={'col-2 text-center'}>
                            <button className={'btn btn-danger w-100'} onClick={deleteBlog}>Delete</button>
                        </div>
                    </div>
                }
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
