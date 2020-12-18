import React, {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import App from "../../../components/App";
import Loading from "../../../components/Loading";
import firebase from "firebase";
import {useAuth} from "../../../hooks/useAuth";
import {firestore} from "../../../lib/firebase";
import {Editor} from "@tinymce/tinymce-react";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    return res.json();
};

function URL() {
    const router = useRouter();
    const { url } = router.query;
    const { data } = useSWR(`/api/blog/${url}`, fetcher);
    const [state, setState] = useState({
        value: '',
        content : 'nuthin',
        title: ''
    })
    const auth = useAuth();


    const postBlog = () => {
        let url = document.getElementById('urlinput').value
        let title = document.getElementById('blogTitleInput').value.toString().trim()
        console.log('what we are posting', {
            body: state.content,
            date: data.date,
            title: title
        })
        firestore.collection('blogs').doc(url).set({
            body: state.content,
            date: data.date,
            title: title
        }).then(() => {
            router.push(`/blog/${url}`)
        })

    }

    const handleEditorChange = (content, editor) => {
        console.log(content)
        setState({
            value: state.value,
            content: content,
            title: state.title
        })
    }

    const handleTitleChange = (event) => {
        console.log('does this do anything', state)
        let value = event.target.value.toString().toLowerCase().trim().replaceAll(' ', '_')
        value = value.replaceAll(/[^a-z^A-Z^0-9_-]+/gi, "")
        setState({
            value: value,
            content : state.content,
            title: event.target.value
        })
        console.log('state after change', state)

    }

    useEffect(() => {
        firebase.analytics().logEvent('page_view', {page_title: `${url}`})
    }, [])

    useEffect(() => {

        if(data){
            console.log('data loaded method', data)
            let title = data.title.toString().toLowerCase().trim().replaceAll(' ', '_')
            title = title.replaceAll(/[^a-z^A-Z^0-9_-]+/gi, "")
            setState({
                value: title,
                content : data.body,
                title: data.title
            })

        }

    }, [data])

    if(!auth.user){
        return null
    }


    if (!data) {
        return (
            <App>
            <Loading/>
        </App>)

    }
    return (
        <App>
            <div className={"container-fluid"}>
                <form>
                    <div className={'row'}>
                        <div className={'col-6'}>
                            <div className="form-group">
                                <label htmlFor="blogTitleInput">Blog Title</label>
                                <input type="text" className="form-control" id="blogTitleInput"
                                       aria-describedby="emailHelp" placeholder="Title" value={state.title} onChange={handleTitleChange}/>
                            </div>
                        </div>
                        <div className={'col-6'}>
                            <div className="form-group">
                                <label htmlFor="urlinput">Blog URL</label>
                                <input readOnly={true} type="text" className="form-control" id="urlinput"
                                       aria-describedby="emailHelp" placeholder="Title" value={state.value}/>
                            </div>
                        </div>
                    </div>
                </form>

                <Editor
                    apiKey="ihb3ayck9a9yko38nxiwbof8anmypdyekid8mpk7322xje6h"
                    init = {{
                        height:500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount',
                            'table'
                        ],
                        toolbar: 'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify code image | \
                                bullist numlist outdent indent table | removeformat | fullscreen help'
                    }}
                    onEditorChange = {handleEditorChange}
                    value={state.content}
                />
                <div className={'row p-2 justify-content-center'}>
                    <div className={'col-4 d-flex justify-content-center'}>
                        <button className={'btn btn-primary w-100'} onClick={postBlog}>Post Blog</button>
                    </div>
                </div>
            </div>

        </App>
    );
}

export default URL;
