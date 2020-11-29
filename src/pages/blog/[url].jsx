import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import App from "../../components/App";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

function URL() {
    const router = useRouter();
    const { url } = router.query;
    const { data } = useSWR(`/api/blog/${url}`, fetcher);


    if (!data) {
        return (<App>
            <div className={"container-xl h-100"}>
                <div style={{height:'25vh'}}></div>
                <div className={'row justify-content-center'}>
                    <div className={'col d-flex justify-content-center'}>
                        <div className="spinner-border text-primary m-5 p-5" role="status" style={{width:'40vmin', height:'40vmin'}}>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </div>

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
