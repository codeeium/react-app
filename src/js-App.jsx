import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './JSX/Navigation';
import RoutesConfig from './JSX/RoutesConfig';

const App = () => {
    return (
        <Router>
            <Navigation />
            <RoutesConfig />
        </Router>
    );
};

export default App;
