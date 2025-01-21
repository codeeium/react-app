import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import LoginForm from './pages/LoginForm';
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
            <div className="container mt-4">
                <Navbar isAuthenticated={isLoggedIn} setIsAuthenticated={setIsLoggedIn} />
                {loginMessage && <div className="alert alert-success">{loginMessage}</div>}

                {isLoggedIn ? (
                    <>
                        {/* Navigation Links */}
                        <nav className="mb-3">
                            <Link to="/" className="btn btn-link">Home</Link>
                            <Link to="/about" className="btn btn-link">About</Link>
                            <Link to="/contact" className="btn btn-link">Contact</Link>
                            <Link to="/profile" className="btn btn-link">Profile</Link>
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        </nav>

                        {/* Routes */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
