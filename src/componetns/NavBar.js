import React,{useState} from 'react';
import GoogleSignIn from "../img/btn_google_signin_dark_focus_web.png";


const NavBar = () => {
    const [user , setUser] = useState(false);
    const googleSignIn = () => {
        setUser(true);
    };
    const googleSignOut = () => {
        setUser(false);
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