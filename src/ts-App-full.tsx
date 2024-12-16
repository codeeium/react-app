import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link }
    from 'react-router-dom';

// Example components
const Home: React.FC = () => {
    return <h2>Home Page</h2>;
};

const About: React.FC = () => {
    return <h2>About Page</h2>;
};

const Contact: React.FC = () => {
    return <h2>Contact Page</h2>;
};

const App: React.FC = () => {
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
