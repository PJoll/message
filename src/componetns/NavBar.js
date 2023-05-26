import React from 'react';
import GoogleSignIn from "../img/btn_google_signin_dark_focus_web.png";
import auth from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const NavBar = () => {
    const [user ] = useAuthState(auth);
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };
    const googleSignOut = () => {
        auth.googleSignOut();
    };
    return (
        <nav className='nav-bar'>
            <h1>React Chat</h1>
            {user ? (
                <button onClick={googleSignOut} className='sign-out' type='button'>Sign Out</button>
            ) : (
                <button className='sign-in'>
                    <img
                    onClick={googleSignIn}
                    src={GoogleSignIn}
                    alt='Sign In with Google '
                    type='button'
                    />
                </button>
            ) }
        </nav>
    )
}

export default NavBar