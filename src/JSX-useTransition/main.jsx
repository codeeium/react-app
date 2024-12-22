import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the 'client' version for React 18+
import App from './App'; // Import the App component

const root =
    ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
