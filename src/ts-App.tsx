import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './TSX/Navigation';
import RoutesConfig from './TSX/RoutesConfig';

const App: React.FC = () => {
    useEffect(() => {
        console.log('App component mounted or re-rendered');
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        // <>hello world</>
        <Router>
            <Navigation />
            <RoutesConfig />
        </Router>
    );
};

export default App;
