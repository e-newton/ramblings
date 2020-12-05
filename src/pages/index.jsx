import App from '../components/App'
import Head from "next/head";
import React from 'react';
import Image from 'next/image'
import BlogTile from "../components/Blog-Tile";
import useSWR from "swr";
import Loading from "../components/Loading";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

export default function Home() {

    const { data } = useSWR(`/api/blog/all`, fetcher);
    if(data) {
        console.log("data", data)
    }


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
                { data &&
                    <div className={'row no-gutters  row-cols-1 row-cols-sm-2 row-cols-md-4'}>
                        {data.map(blog => <BlogTile key= {blog.title+"_"+blog.date} title = {blog.title} date = {blog.date} id = {blog.id}/>)}
                    </div>
                }

            </div>
        </App>

    )
}
