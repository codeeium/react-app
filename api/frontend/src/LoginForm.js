import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const API_URL = 'http://localhost:5038/api/login';

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await
                fetch('http://localhost:5038/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Login failed:', errorData);
                alert(errorData.error || 'Login failed');
                return;
            }

            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred while logging in. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) =>
                            setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>Login successful!</p>}
        </div>
    );
}

export default Login;
