import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Example components
const Home = () => {
    return <h2>Home Page</h2>;
};

const About= () => {
    return <h2>About Page</h2>;
};

const Contact= () => {
    return <h2>Contact Page</h2>;
};

const App= () => {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
