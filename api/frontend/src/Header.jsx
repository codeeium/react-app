// Header Component
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <div className="d-flex justify-content-end">
            {!isLoggedIn ? (
                <>
                    <button className="btn btn-outline-primary me-2" onClick={() => navigate('/login')}>Login</button>
                    <button className="btn btn-outline-secondary" onClick={() => navigate('/register')}>Register</button>
                </>
            ) : (
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            )}
        </div>
    );
};

export default Header;