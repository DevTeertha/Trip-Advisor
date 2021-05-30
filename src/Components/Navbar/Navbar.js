import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
import { connect } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Logout } from '../../redux/actions/Actions';

const Navbar = (props) => {
    const { user, Logout } = props;
    const { isSignIn, img, name } = user.data;

    console.log(Logout)

    const resetUser = {
        isSignIn: false,
        name: "",
        email: "",
        img: ""
    }

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

                                    <Popup trigger={
                                        <div className="profile-image-container mt-1">
                                            <img className="profile-image" src={img} alt="" />
                                        </div>
                                    } position="bottom center">
                                        <div className="p-3">
                                            <div className="profile-pop">
                                                <img className="profile-pop-img" src={img} alt="" />
                                            </div>
                                            <p className="mt-2 text-center fw-bold">{name}</p>
                                            <button onClick={()=>Logout(resetUser)} className="btn btn-outline-dark w-100">Log Out</button>
                                        </div>
                                    </Popup>
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

const mapDispatchToProps = {
    Logout: Logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);