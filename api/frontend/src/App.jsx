import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import Profile from './Profile';
import './App.css';

const App = () => (
    <Router>
        <div className="App">
            <nav>
                <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
            </nav>
            <Routes>
                <Route path="/register" element={<RegistrationForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    </Router>
);

export default App;
