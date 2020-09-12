import React from 'react';

const Navbar = () => {
    return ( 
        <header className="app-header">
            <p className="user-name">Hello<span> user</span> </p>
            <nav className="principal-nav">
                <a href="#!">Close</a>
            </nav>
        </header>
     );
}
 
export default Navbar;