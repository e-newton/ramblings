import * as React from 'react'
import Link from 'next/link'
import {withRouter} from 'next/router'

import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";

const Header = ({router}) => {
    console.log(router.pathname)
    return (

        <Navbar bg="primary" expand="lg" className={'navbar-dark'}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className={(router.pathname === '/') || (router.pathname === undefined) ? 'nav-link active' : 'nav-link'}>Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className={(router.pathname === '/blog') ? 'nav-link active' : 'nav-link'}>Blog</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className={(router.pathname === '/about') ? 'nav-link active' : 'nav-link'}>About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact">
                            <a className={(router.pathname === '/contact') ? 'nav-link active' : 'nav-link'}>Contact</a>
                        </Link>
                    </li>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header)
