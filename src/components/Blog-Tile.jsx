import React from 'react';
import Link from "next/link";


function BlogTile(props) {
    let date = new Date(props.date.seconds*1000)
    console.log('date', date)
    return (
            <Link href = {"./blog/"+props.id}>
                <a>
                    <div className="col">
                        <div className="row square bg-primary m-1 text-center d-flex align-items-center justify-content-center">
                            <div className="col align-items-center">
                                <h6>{props.title}</h6>
                                <code>{date.getDate()}/{date.getMonth()}/{date.getFullYear()}</code>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
    );
}

export default BlogTile;
