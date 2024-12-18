import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Add any global styles here

// Create a root element to render the app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
