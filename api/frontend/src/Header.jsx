import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token
        setIsLoggedIn(false); // Update login state
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="header-buttons">
            {!isLoggedIn && (
                <>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/register')}>Register</button>
                </>
            )}
            {isLoggedIn && (
                <button onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
};

export default Header;
