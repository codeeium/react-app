import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate }
    from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import LoginForm from './LoginForm';
import './App.css';

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <div className="container mt-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">App</Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/profile" element={token ? <Profile /> : <LoginForm />} />
                    </Routes>
                </div>

                {token && <Profile />}
            </div>
        </Router>
    );
};

export default App;