import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';
import Help from './pages/Help';
import RegistrationForm from './pages/RegistrationForm';

import './App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
    const [loginMessage, setLoginMessage] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    }, []);

    const handleLoginSuccess = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
        setLoginMessage('Login Successful!');
        setTimeout(() => setLoginMessage(''), 3000);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div>
                {/* Navigation Bar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <div className="navbar-nav me-auto">
                            {/* Left Side Links */}
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">About</Link>
                            <Link to="/contact" className="nav-link">Contact</Link>
                            <Link to="/help" className="nav-link">Help</Link>
                        </div>

                        <div className="navbar-nav ms-auto">
                            {/* Right Side Links */}
                            {isLoggedIn ? (
                                <>
                                    <Link to="/profile" className="nav-link">Profile</Link>
                                    <button className="btn btn-danger" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" className="nav-link">Login</Link>
                                    <Link to="/register" className="nav-link">Register</Link>
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <div className="container mt-4">
                    {loginMessage && <div className="alert alert-success">{loginMessage}</div>}

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/help" element={<Help />} />
                        {isLoggedIn ? (
                            <>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="*" element={<Navigate to="/" />} />
                            </>
                        ) : (
                            <>
                                <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
                                <Route path="/register" element={<RegistrationForm />} />
                                <Route path="*" element={<Navigate to="/login" />} />
                            </>
                        )}
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
