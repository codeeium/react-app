import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './TSX/Navigation';
import RoutesConfig from './TSX/RoutesConfig';

const App: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <RoutesConfig />
        </Router>
    );
};

export default App;
