import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand" to="/"><img className='img-fluid w-75' src="http://ingenioushubs.com/Allhallows/images/header-logo.png" alt="Logo" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item px-3">
                            <Link className="nav-link text-white fs-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-white fs-5" to="about">About</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-white fs-5" to="artist">Artist</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link text-white fs-5" to="contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <ul className='navbar-nav navbar-right nav-sign list-style-none'>
                    <li>
                        <a className='nav-link'>Git a Ticket</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}
