// This is just a page that will allow me to login and stuff
import React from 'react';
import App from "../components/App";

function Admin(props) {
    return (
        <App>
            <div className={"container-xl"}>
                <div className={"row justify-content-center"}>
                    <div className={'col text-center m-5'}>
                        <h1>If you aren't Eric, you shouldn't see this 🦞</h1>
                    </div>
                </div>
            </div>
        </App>
    );
}

export default Admin;
