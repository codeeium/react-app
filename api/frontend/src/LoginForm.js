import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            localStorage.setItem('token', data.token);
            setSuccess(true);
            setError('');
            setIsLoggedIn(true);
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred while logging in. Please try again.');
            setSuccess(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        setSuccess(false);
        alert('You have been logged out.');
    };

    return (
        <div className="container mt-5">
            {!isLoggedIn ? (
                <div className="card p-4 shadow">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username:</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                    {error && <p className="text-danger mt-3">{error}</p>}
                    {success && <p className="text-success mt-3">Login successful!</p>}
                </div>
            ) : (
                <div className="card p-4 shadow">
                    <h2 className="text-center">Welcome, {username}!</h2>
                    <button className="btn btn-danger w-100 mt-3" onClick={handleLogout}>Logout</button>
                </div>
            )}
        </div>
    );
}

export default Login;
