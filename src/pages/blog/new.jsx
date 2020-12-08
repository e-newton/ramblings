import React, {useState} from 'react';
import App from "../../components/App";
import {Editor} from "@tinymce/tinymce-react";
import {firestore} from "../../lib/firebase";
import {useRouter} from 'next/router'
import {useAuth} from "../../hooks/useAuth";

function NewBlog() {
    const router = useRouter();
    const [state, setState] = useState({url: '', content: ''})
    const auth = useAuth();


    const postBlog = () => {
        let url = document.getElementById('urlinput').value
        let title = document.getElementById('blogTitleInput').value.toString().trim()
        console.log('what we are posting', {
                body: state.content,
                date: new Date(),
                title: title
            })
        firestore.collection('blogs').doc(url).set({
            body: state.content,
            date: new Date(),
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
        let title = event.target.value.toString().toLowerCase().trim().replaceAll(' ', '_')
        title = title.replaceAll(/[^a-z^A-Z^0-9_-]+/gi, "")
        setState({
            value: title,
            content : state.content,
            title: state.title
           })

    }

    return auth.user && (
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
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | bold italic backcolor | \
                                alignleft aligncenter alignright alignjustify code image | \
                                bullist numlist outdent indent | removeformat | fullscreen help'
                        }}
                        onEditorChange = {handleEditorChange}
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


// class NewBlog extends Component {
//
//     // state = {
//     //     value: '',
//     //     content: '',
//     // }
//     //
//     // constructor(props) {
//     //     super(props);
//     //     this.handleTitleChange = this.handleTitleChange.bind(this);
//     //     this.handleEditorChange = this.handleEditorChange.bind(this);
//     //     this.postBlog = this.postBlog.bind(this)
//     //     console.log(this.props)
//     //
//     // }
//     //
//     //
//     // handleEditorChange = (content, editor) => {
//     //     this.setState({
//     //         value: this.state.value,
//     //         content: content
//     //     })
//     //
//     // }
//     //
//     // handleTitleChange(event) {
//     //     let title = event.target.value.toString().toLowerCase().trim().replaceAll(' ', '_')
//     //     title = title.replaceAll(/[^a-z^A-Z^0-9_-]+/gi, "")
//     //     this.setState({
//     //         value: title,
//     //         content : this.state.content
//     //        })
//     //
//     // }
//     //
//     // async postBlog() {
//     //     let url = document.getElementById('urlinput').value
//     //     let title = document.getElementById('blogTitleInput').value.toString().trim()
//     //     console.log('what we are posting', {
//     //             body: this.state.content,
//     //             date: new Date(),
//     //             title: title
//     //         })
//     //     await firestore.collection('blogs').doc(url).set({
//     //         body: this.state.content,
//     //         date: new Date(),
//     //         title: title
//     //     })
//     //
//     // }
//
//
//     render() {
//         return (
//             <App>
//                 <div className={"container-fluid"}>
//                     <form>
//                         <div className={'row'}>
//                             <div className={'col-6'}>
//                                 <div className="form-group">
//                                     <label htmlFor="blogTitleInput">Blog Title</label>
//                                     <input type="text" className="form-control" id="blogTitleInput"
//                                            aria-describedby="emailHelp" placeholder="Title" onChange={this.handleTitleChange}/>
//                                 </div>
//                             </div>
//                             <div className={'col-6'}>
//                                 <div className="form-group">
//                                     <label htmlFor="urlinput">Blog URL</label>
//                                     <input readOnly={true} type="text" className="form-control" id="urlinput"
//                                            aria-describedby="emailHelp" placeholder="Title" value={this.state.value}/>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//
//                     <Editor
//                         apiKey="ihb3ayck9a9yko38nxiwbof8anmypdyekid8mpk7322xje6h"
//                         init = {{
//                             height:500,
//                             menubar: false,
//                             plugins: [
//                                 'advlist autolink lists link image charmap print preview anchor',
//                                 'searchreplace visualblocks code fullscreen',
//                                 'insertdatetime media table paste code help wordcount'
//                             ],
//                             toolbar: 'undo redo | formatselect | bold italic backcolor | \
//                                 alignleft aligncenter alignright alignjustify code image | \
//                                 bullist numlist outdent indent | removeformat | fullscreen help'
//                         }}
//                         onEditorChange = {this.handleEditorChange}
//                     />
//                     <div className={'row p-2 justify-content-center'}>
//                         <div className={'col-4 d-flex justify-content-center'}>
//                             <button className={'btn btn-primary w-100'} onClick={this.postBlog}>Post Blog</button>
//                         </div>
//                     </div>
//                 </div>
//
//             </App>
//
//         );
//     }
// }
//
export default NewBlog;
