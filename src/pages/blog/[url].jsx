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

function URL({data}) {
    const router = useRouter();
    const { url } = router.query;
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
export async function getStaticPaths() {
    let blogs = await fetch(`https://ramblings.ericnewton.ca/api/blog/all`);
    blogs = await blogs.json()
    const ids = []
    blogs.forEach(blog => {
        ids.push(blog.id)
    })
    console.log('blogs', blogs);
    const paths = []
    ids.forEach(id => {
        paths.push({params: {url: id}})
    })
    return {
        paths: paths,
        fallback: false
    }
}
export async function getStaticProps(context) {
    console.log('context', context);
    let data = await fetch(`https://ramblings.ericnewton.ca/api/blog/${context.params.url}`);
    data = await data.json();
    return {
        props: {data},
        revalidate: 300
    }
}

export default URL;
