// index.jsx (Entry Point)
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = React.lazy(() =>
    import('./Home'));
const About = React.lazy(() =>
    import('./About'));

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Suspense>
        </Router>
    );
};



export default App;
