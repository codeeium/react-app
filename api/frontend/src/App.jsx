import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import LoginForm from './LoginForm';
import Navbar from './my-app/src/components/Navbar'; // Adjusted path for Navbar
import Home from './my-app/src/pages/Home'; // Adjusted path for Home
import About from './my-app/src/pages/About';
import Contact from './my-app/src/pages/Contact';
import Help from './my-app/src/pages/Help';
import Class from './my-app/src/pages/Class';
import './css/App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // Track login state
    const [loginMessage, setLoginMessage] = useState(''); // Track login success message

    const handleLoginSuccess = (token) => {
        localStorage.setItem('token', token); // Store token in localStorage
        setIsLoggedIn(true); // Update login state
        setLoginMessage('Login Successful!'); // Set success message

        setTimeout(() => {
            setLoginMessage(''); // Clear the message after 3 seconds
        }, 3000);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setIsLoggedIn(false); // Update login state
    };

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/class', name: 'Class' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/help', name: 'Help' },
        { path: '/profile', name: 'Profile' },
        { path: '/register', name: 'Register' },
        { path: '/login', name: 'Login' },
    ];

    return (
        <Router>
            <div className="container mt-4">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {!isLoggedIn ? (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                    </>
                                ) : (
                                    <li className="nav-item">
                                        <button
                                            className="btn btn-link nav-link"
                                            onClick={handleLogout}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Login Success Message */}
                {loginMessage && (
                    <div className="alert alert-success">{loginMessage}</div>
                )}

                {/* Main Content and Routing */}
                <div className="content">
                    <Routes>
                        {/* Registration and Login Routes */}
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
                        <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />

                        {/* Pages Routes */}
                        <Route path="/" element={<Home routes={routes} />} />
                        <Route path="/class" element={<Class />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/help" element={<Help />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
