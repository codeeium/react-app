import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Add any global styles here

// Ensure the element exists, and it's of type HTMLElement
const rootElement = document.getElementById('root') as HTMLElement;


// Create a root element to render the app
const root = ReactDOM.createRoot(rootElement);

// Render the App component
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
