import App from '../components/App'
import useSWR from "swr";
import Loading from "../components/Loading";
import BlogTile from "../components/Blog-Tile";
import React, {useEffect} from "react";
import '../lib/firebase'
import firebase from "firebase";


const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};
export default function Blog() {
    const { data } = useSWR(`/api/blog/all`, fetcher);

    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'Blog Page'})
    }, [])

    return (
        <App>
            <div className={'container-xl'}>
                <div className={'row justify-content-center'}>
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
