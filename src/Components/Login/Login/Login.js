import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import { connect } from "react-redux";
import { setUser } from "../../../redux/actions/Actions";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = (props) => {
    const { setUser } = props;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [loginInfo, setLoginInfo] = useState([]);
    let [newUser, setNewUser] = useState(false)

    const handleBlur = (event) => {
        let newUser = { ...loggedInUser }
        newUser[event.target.name] = event.target.value
        setLoggedInUser(newUser)
        console.log('newuser', newUser);

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loggedInUser.Email, loggedInUser.password);
        if (newUser && loggedInUser.Email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.Email, loggedInUser.password)
                .then((res) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    updateUserName(loggedInUser.name)
                    console.log('sign in user', res.user, newUserInfo);
                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
        if (!newUser && loggedInUser.Email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.Email, loggedInUser.password)
                .then((userCredential) => {
                    var { displayName, email } = userCredential.user;
                    let newUserInfo = { Name: displayName, Email: email }
                    newUserInfo.error = ''
                    console.log("user", newUserInfo);
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);

                })
                .catch((error) => {
                    let newUserInfo = { ...loggedInUser }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
    }
    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            console.log(error);
        });
    }
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
        <div className="login-page container ">

            <div className="d-flex justify-content-center my-5  ">
                <div style={{ borderRadius: "20px" }} className="w-50 bg-light p-5">
                    <form onSubmit={handleSubmit}>

                        {newUser && <div class=" mb-1">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">
                                Name
                            </label>

                            <input class="form-control" type="text" />

                        </div>}

                        <div class=" mb-1">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">
                                Email
                             </label>

                            <input class="form-control" type="text" required onBlur={handleBlur} placeholder="type your Email" name="Email" id="" />

                        </div>
                        <div class="mb-1">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">
                                Password
                            </label>

                            <input class="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="password" id="" placeholder="type your password" />

                        </div>

                        {newUser && <div class=" mb-1">
                            <label for="inputPassword3" class="col-sm-2 col-form-label">
                                Confirm password
                           </label>

                            <input class="form-control" id="inputPassword3" type="password" required onBlur={handleBlur} name="confirmPassword" id="" placeholder="confirm password" />

                        </div>}
                        {newUser ? <p style={{ cursor: "pointer" }}>Already have an account ? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" class="text-primary">Log in</span></p>
                            : <p style={{ cursor: "pointer" }}>Are you new user? <span onClick={() => setNewUser(!newUser)} name="newUser" id="newUser" class="text-primary">create account</span></p>
                        }
                        <div className=" justify-content-center d-flex mb-1">
                            <button className="w-75" type="submit" variant="primary" size="md" block>
                                Sign in
                    </button>
                        </div>

                    </form>
                    <div className="justify-content-center d-flex">
                        <button className="btn btn-primary" onClick={handleGoogleSignIn}>sign in with google</button>
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
