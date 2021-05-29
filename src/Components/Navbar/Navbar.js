import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import { connect } from 'react-redux';

const Navbar = (props) => {
    const { isSignIn, img } = props.user.data;
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link class="navbar-brand logo" to="/">Trip Advisor</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link">Experience</Link>
                        </li>
                        <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link">Help</Link>
                        </li>
                        {
                            isSignIn ?
                                <li class="nav-item ms-3 fs-5">
                                    <div className="profile-image-container mt-1">
                                        <img className="profile-image" src={img} alt=""/>
                                    </div>
                                </li>
                                :
                                <li class="nav-item ms-3 fs-5">
                                    <Link class="nav-link" to="/login">Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar);