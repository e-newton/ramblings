import App from '../components/App'
import Head from "next/head";
import React, {useEffect} from 'react';
import Image from 'next/image'
import BlogTile from "../components/Blog-Tile";
import useSWR from "swr";
import Loading from "../components/Loading";
import '../lib/firebase'
import firebase from "firebase";
import absoluteUrl from "next-absolute-url/index";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

export default function Home({data}) {
    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: 'Home Page'})
    }, [])
    return (
        <App>
            <div className={'container-xl'}>
                <div className={'row justify-content-center'}>
                    <div className={'col text-center mt-5 pt-5'}>
                        <h1>Eric's Ramblings</h1>
                        <h5 className={'mt-5 mb-5'}>The thoughts and ideas of a senior computer science student and striving web developer.</h5>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <h5>Recent Blogs</h5>
                    </div>
                </div>
                { !data &&
                <Loading/>}
                { !!data &&
                    <div className={'row no-gutters  row-cols-1 row-cols-sm-2 row-cols-md-4'}>
                        {data.slice(0, 8).map(blog => <BlogTile key= {blog.title+"_"+blog.date} title = {blog.title} date = {blog.date} id = {blog.id}/>)}
                    </div>
                }

            </div>
        </App>

    )
}
export async function getStaticProps() {
    let data = await fetch(`https://ramblings.ericnewton.ca/api/blog/all`);
    data = await data.json();
    return {
        props: {data},
        revalidate: 300
    }
}
