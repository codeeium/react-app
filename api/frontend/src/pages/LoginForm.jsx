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

    const formStyle = {
        backgroundImage: 'url(./FrontPage1.jpeg)',  // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    };

    const loginFormContainerStyle = {
        position: 'absolute',
        top: '20%', // Adjust to position the form higher or lower on the page
        left: '50%',
        transform: 'translateX(-50%)', // Centers the form horizontally
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '8px',
        color: 'white',
        width: '300px', // You can adjust the width of the form
        textAlign: 'center', // Centers text inside the form
    };

    return (
        <div style={formStyle}>
            <form onSubmit={handleSubmit} style={loginFormContainerStyle}>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
                />

                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
                    Login
                </button>
                {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
            </form>
        </div>
    );
};

LoginForm.propTypes = {
    onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginForm;


// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
//
// const LoginForm = ({ onLoginSuccess }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('/api/login', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });
//
//             const data = await response.json();
//             if (response.ok) {
//                 onLoginSuccess(data.token);
//                 console.log('Login successful');
//             } else {
//                 setError(data.error || 'Login failed');
//             }
//         } catch (err) {
//             setError(err.message);
//         }
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="Username"
//                 required
//             />
//
//             <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 required
//             />
//
//             <button type="submit">Login</button>
//             {error && <p>{error}</p>}
//         </form>
//     );
// };
//
// LoginForm.propTypes = {
//     onLoginSuccess: PropTypes.func.isRequired,
// };
//
// export default LoginForm;
