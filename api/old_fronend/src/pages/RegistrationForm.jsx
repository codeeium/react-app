// import React, { useState } from 'react';
//
// const RegistrationForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//
//     const handleRegistration = async () => {
//         try {
//             const response = await fetch('http://localhost:5038/api/register', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password }),
//             });
//
//             if (!response.ok) throw new Error('Registration failed');
//             setMessage('Registration successful!');
//         } catch (err) {
//             setMessage(err.message);
//         }
//     };
//
//     return (
//         <form onSubmit={(e) => { e.preventDefault(); handleRegistration().then(r => console.log(r)); }}>
//             <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
//             <button type="submit">Register</button>
//             {message && <p>{message}</p>}
//         </form>
//     );
// };
//
// export default RegistrationForm;
