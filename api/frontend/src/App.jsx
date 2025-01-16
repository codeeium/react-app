import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Profile from './Profile';
import './App.css';
import LoginForm from "./LoginForm";

const App = () => {
    const token = localStorage.getItem('token');

    return (
        <Router>
            <div className="App">
                <nav className="nav">
                    <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
                </nav>

                <div className="content">
                    <Routes>
                        <Route path="/register" element={<RegistrationForm />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/profile" element={token ? <Profile /> : <LoginForm />} />
                    </Routes>
                </div>

                {/* Profile Section on the Right */}
                {token && <Profile />}
            </div>
        </Router>
    );
};

export default App;
