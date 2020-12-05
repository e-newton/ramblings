import React from 'react';

function Loading(props) {
    return (
        <div className={"container-xl h-100"}>
            <div style={{height:'25vh'}}/>
            <div className={'row justify-content-center'}>
                <div className={'col d-flex justify-content-center'}>
                    <div className="spinner-border text-primary m-5 p-5" role="status" style={{width:'40vmin', height:'40vmin'}}>
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loading;
