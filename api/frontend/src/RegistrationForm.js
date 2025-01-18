import React, { useState } from 'react';

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegistration = async () => {
        const data = { username, password };

        try {
            const response = await fetch(
                'http://localhost:5038/api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.error || 'Registration failed');
                return;
            }

            const result = await response.json();
            setMessage(result.message || 'Registration successful');
        } catch (error) {
            setMessage('Error registering user');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button onClick={handleRegistration}>Register</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default RegistrationForm;
