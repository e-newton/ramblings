import * as React from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router }) => {
    console.log(router.pathname)
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link  href="/">
                        <a className={(router.pathname === '/')||(router.pathname === undefined) ? 'nav-link active' : 'nav-link'}>Home</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  href="/blog">
                        <a className={(router.pathname === '/blog') ? 'nav-link active' : 'nav-link'}>Blog</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  href="/about">
                        <a className={(router.pathname === '/about') ? 'nav-link active' : 'nav-link'}>About</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link  href="/contact">
                        <a className={(router.pathname === '/contact') ? 'nav-link active' : 'nav-link'}>Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
)}

export default withRouter(Header)
