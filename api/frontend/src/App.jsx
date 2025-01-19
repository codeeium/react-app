import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import LoginForm from './LoginForm';
import './css/App.css';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] =
        useState(!!localStorage.getItem('token')); // Track login state

    const [loginMessage, setLoginMessage] = useState('');
    // Track login success message

    const handleLoginSuccess = (token) => {
        localStorage.setItem('token', token); // Store token in localStorage
        setIsLoggedIn(true); // Update login state
        setLoginMessage('Login Successful!123333'); // Set success message

        setTimeout(() => {
            setLoginMessage(''); // Clear the message after 3 seconds
        }, 3000);
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setIsLoggedIn(false); // Update login state
    };

    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                {!isLoggedIn && (
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/register">Register</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/login">Login</Link>
                                        </li>
                                    </>
                                )}
                                {isLoggedIn && (
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

                <div className="content">
                    {loginMessage && (
                        <div className="alert alert-success">{loginMessage}</div>
                    )}
                    <Routes>
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route
                            path="/login"
                            element={<LoginForm onLoginSuccess={handleLoginSuccess} />}
                        />
                        <Route
                            path="/profile"
                            element={
                                isLoggedIn ? <Profile /> : <LoginForm onLoginSuccess={handleLoginSuccess} />
                            }
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
