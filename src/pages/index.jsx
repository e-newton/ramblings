import App from '../components/App'
import Head from "next/head";
import React from 'react';
import Image from 'next/image'

export default function Home() {
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
                <div className={'row no-gutters row-cols-2 row-cols-md-4'}>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>This is the blog title</h6>
                                <code>29/11/2020</code>
                            </div>

                        </div>
                    </div>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>This is the blog title</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>This is the blog title</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>This is the blog title</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>This is the blog title</h6>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </App>

    )
}
