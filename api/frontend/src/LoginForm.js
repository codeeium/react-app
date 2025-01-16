import React, { useState } from 'react';
import loginform from './LoginForm.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

    const API_URL = 'http://localhost:5038/api/login';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error || 'Login failed');
                setSuccess(false);
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token); // Save token in localStorage
            setSuccess(true);
            setError('');
            setIsLoggedIn(true); // Mark user as logged in
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred while logging in. Please try again.');
            setSuccess(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setIsLoggedIn(false); // Update login state
        setSuccess(false); // Reset success message
        alert('You have been logged out.');
    };

    return (
        <div>
            {!isLoggedIn ? (
                <div>
                    <h2>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>Login successful!</p>}
                </div>
            ) : (
                <div>
                    <h2>Welcome, {username}!</h2>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Login;
