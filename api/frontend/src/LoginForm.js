import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 13.42.26.150
        try {
            const response = await fetch('http://13.42.26.150:5038/api/login', {
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

export default LoginForm;
