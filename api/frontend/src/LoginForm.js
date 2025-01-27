import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            if (onLoginSuccess && typeof onLoginSuccess === 'function') {
                onLoginSuccess(data.token); // Notify parent of successful login
                setIsLoggedIn(true); // Update local state on successful login
            } else {
                console.error('onLoginSuccess is not defined or not a function');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <div className="alert alert-success">Login Successful!</div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                    />
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <br />
                    <button type="submit">Login</button>
                </form>
            )}
            {error && <p>{error}</p>}
        </div>
    );
};

// PropTypes validation for the `onLoginSuccess` prop
LoginForm.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,  // Ensure onLoginSuccess is a function and required
};

export default LoginForm;
