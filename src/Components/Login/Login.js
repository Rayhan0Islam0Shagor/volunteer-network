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
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setLoggedInUser(signedInUser);
                history.replace(from)
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);

            });
    }


    return (
        <div className='pb-5'>
            <div className="text-center pt-4">
                <Link to='/home'>
                    <img className="ml-4" height="50px" width="200px" src={logo} alt="" />
                </Link>
            </div>
            <div style={{ height: "500px", border: '1px solid gray', borderRadius: "10px" }}
                className="container align-items-center d-flex w-50 mt-5"
            >
                <div className="text-center w-100 p-5">
                    <h2 className="font-weight-bold mb-3">Login With</h2>
                    <button onClick={handleGoogleSignIn} style={{ background: "#ebecf1" }} className="btn rounded-pill w-100">
                        <img className="mr-2" height="20px" width="20px" src={googleImg} alt="" />
                    Login with Google
                    </button>
                    <p className="mt-4">Don't have an account? <Link to="/login">Create Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;