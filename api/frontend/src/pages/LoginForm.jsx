import React, { useState } from 'react';
import PropTypes from 'prop-types';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();
            if (response.ok) {
                onLoginSuccess(data.token);
                console.log('Login successful');
            } else {
                setError(data.error || 'Login failed');
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />

            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

LoginForm.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;
