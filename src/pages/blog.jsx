import App from '../components/App'
import useSWR from "swr";
import Loading from "../components/Loading";
import BlogTile from "../components/Blog-Tile";
import React, {useEffect} from "react";
import '../lib/firebase'
import firebase from "firebase";
import {useAuth} from "../hooks/useAuth";
import {useRouter} from "next/router";


const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};
export default function Blog({data}) {
    const auth = useAuth()
    const router = useRouter()

    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'Blog Page'})
    }, [])

    const newBlog = async() => {
        await router.push('blog/new')
    }

    return (
        <App>
            <div className={'container-xl'}>
                { auth.user &&
                <div className={'row justify-content-center'}>
                    <div className={'col-2 text-center'}>
                        <button className={'btn btn-secondary w-100'} onClick={newBlog}>Create New Blog</button>
                    </div>
                </div>
                }
                <div className={'row justify-content-center mb-3'}>
                    <div className={'col text-center mt-5 pt-5'}>
                        <h1>Blog</h1>
                    </div>
                </div>
                { !data &&
                <Loading/>}
                { data &&
                <div className={'row no-gutters  row-cols-1 row-cols-sm-2 row-cols-md-4'}>
                    {data.map(blog => <BlogTile key= {blog.title+"_"+blog.date} title = {blog.title} date = {blog.date} id = {blog.id}/>)}
                </div>
                }

            </div>
        </App>
    )
}
export async function getStaticProps(context) {
    console.log('context', context);
    let data = await fetch(`https://ramblings.ericnewton.ca/api/blog/all`);
    data = await data.json();
    return {
        props: {data},
        revalidate: 300
    }
}
