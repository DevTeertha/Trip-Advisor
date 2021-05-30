import React, { useContext, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import loginImg from "../../image/man.png"
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';
import { UserContext } from '../../App';
import './Navbar.css'
import firebase from "firebase/app";

const Navbar = () => {
    const[loggedInUser, setLoggedInUser]= useContext(UserContext)
    useEffect(() =>{
        const token =sessionStorage.getItem('token');
        if(!token){
            return false
        }
        const decodedToken=jwt_decode(token)
        const { name, email, picture } = decodedToken;
        const signedInUser = { name: name, email: email, img: picture }
        setLoggedInUser(signedInUser)
        
        console.log("Decode", signedInUser);
 
    },[])
 
    
    const handleLogOut = () => {
        sessionStorage.removeItem('token');
        setLoggedInUser({})
   

    }

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
                        { 
                    
                            loggedInUser.email? 
                            <Popup trigger={
                                <div className="profile-trigger mt-1">
                                    <img className="profile-image w-100 p-1" src={loggedInUser.img||loginImg} alt="" />
                                </div>
                            }
                                position="bottom">
                                <div className="bg-white p-3 text-center">
                                    <img style={{ height: '100px', width: '100px' }} className="profile-image p-1 border" src={loggedInUser.img||loginImg} alt="profile-image" />
                                    <h5 className="text-dark font-weight-bold">{loggedInUser.name}</h5>
                                    <button onClick={handleLogOut} className="btn btn-outline-danger w-100 mt-4">Log Out?</button>
                                </div>
                            </Popup>
                 
                      
                       : <li class="nav-item ms-3 fs-5">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                          }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;