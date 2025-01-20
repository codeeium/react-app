// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Help from './pages/Help';
// import Class from './pages/Class';
// import RegistrationForm from './pages/RegistrationForm';
// import LoginForm from './pages/LoginForm';
// import Profile from './pages/Profile';
// import './App.css';
//
// const App = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
//     const [loginMessage, setLoginMessage] = useState('');
//
//     const handleLoginSuccess = (token) => {
//         localStorage.setItem('token', token);
//         setIsLoggedIn(true);
//         setLoginMessage('Login Successful!');
//         setTimeout(() => setLoginMessage(''), 3000);
//     };
//
//     const handleLogout = () => {
//         localStorage.removeItem('token');
//         setIsLoggedIn(false);
//     };
//
//     return (
//         <Router>
//             <div className="container mt-4">
//                 <Navbar isAuthenticated={isLoggedIn} setIsAuthenticated={setIsLoggedIn} />
//                 {loginMessage && <div className="alert alert-success">{loginMessage}</div>}
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/class" element={<Class />} />
//                     <Route path="/about" element={<About />} />
//                     <Route path="/contact" element={<Contact />} />
//                     <Route path="/help" element={<Help />} />
//                     <Route path="/register" element={<RegistrationForm />} />
//                     <Route path="/login" element={<LoginForm onLoginSuccess={handleLoginSuccess} />} />
//                     <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };
//
// export default App;
