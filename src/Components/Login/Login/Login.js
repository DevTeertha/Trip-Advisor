import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";
import { setUser } from "../../../redux/actions/Actions";
import Header from "../../Header/Header";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = (props) => {
    const { setUser } = props;
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { isSignIn: true, name: displayName, email: email, img: photoURL };
                setUser(signedInUser)
                storeAuthToken();
                history.replace(from);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;
            });

        const storeAuthToken = () => {
            firebase
                .auth()
                .currentUser.getIdToken(/* forceRefresh */ true)
                .then(function (idToken) {
                    sessionStorage.setItem("token", idToken);


                })
                .catch(function (error) { });
        };
    };

    return (
        <div>
            <div>
                <Header></Header>
            </div>
            <div className="login-page container ">
                <div className="d-flex justify-content-center my-5  ">
                    <div style={{ borderRadius: "20px" }} className="w-50 bg-light p-5">
                        <div className="justify-content-center d-flex">
                            <button className="btn btn-outline-dark" onClick={handleGoogleSignIn}>sign in with google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user
    }
}
const mapDispatchToProps = {
    setUser: setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
