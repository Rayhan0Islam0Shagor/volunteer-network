import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import googleImg from '../../logos/google.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png'




const Login = () => {
    const { userInfo } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = userInfo;
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email: email, photo: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from)
            })
            .catch(error => {
                const errorMessage = error.message;

            });
    }


    return (
        <div style={{ backgroundColor: "#e0ece4" }}>
            <div className='pb-5'>
                <div className="text-center pt-4">
                    <Link to='/home'>
                        <img width="200px" src={logo} alt="" />
                    </Link>
                </div>
                <div style={{ height: "500px", border: '1px solid gray', borderRadius: "10px" }}
                    className="bg-light container align-items-center d-flex w-50 mt-5"
                >
                    <div className="text-center w-100 p-5">
                        <h2 className="font-weight-bold mb-3">Login With</h2>
                        <button onClick={handleGoogleSignIn} style={{ background: "#ebecf1" }} className="btn rounded-pill w-100">
                            <img className="mr-2" height="20px" width="20px" src={googleImg} alt="" />
                    Login with Google
                    </button>
                        <p className="mt-4">Don't have an account? <button className="btn" onClick={handleGoogleSignIn}><Link to="/login"> Create Account</Link></button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;