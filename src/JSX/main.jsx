// index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the 'react-dom/client' module
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

// Create a root using ReactDOM.createRoot() for React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app using the root's render method
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
