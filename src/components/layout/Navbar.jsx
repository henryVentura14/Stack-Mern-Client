import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext'

const Navbar = () => {
    //context auth
    const authContext = useContext(AuthContext)
    const { user, authUser, closeSession } = authContext
    //USE EFFECT
    useEffect(() => {
        authUser()
        // eslint-disable-next-line
    }, [])
    return (
        <header className="app-header">
            {user ? <p className="user-name">Hello<span> {user.name}</span> </p>
                : null}
            <nav className="principal-nav">
                <button
                    className="btn btn-blank close-session"
                    onClick={() => closeSession()}
                >
                    Close session
                </button>
            </nav>
        </header>
    );
}

export default Navbar;