import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

function Navbar({ isAuthenticated, setIsAuthenticated }) {
    return (
        <nav>
            <ul>
                {!isAuthenticated && (
                    <>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </>
                )}
                {isAuthenticated && (
                    <>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Logout setIsAuthenticated={setIsAuthenticated} />
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
