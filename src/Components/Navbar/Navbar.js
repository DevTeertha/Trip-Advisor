import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link class="navbar-brand logo" href="#">Trip Advisor</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/experience">Experience</Link>
                        </li>
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/experience">Help</Link>
                        </li>
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;