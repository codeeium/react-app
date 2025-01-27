import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL||'http://localhost:5038';

    const handleRegistration = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) throw new Error('Registration failed');
            setMessage('Registration successful!');
        } catch (err) {
            setMessage(err.message);
        }
    };

    // Making the onSubmit async to wait for handleRegistration
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await handleRegistration();  // Await the registration process
    };

    return (
        <form onSubmit={onSubmitHandler}>
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
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
};

export default RegistrationForm;
