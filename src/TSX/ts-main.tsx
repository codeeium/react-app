import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 module
import { Provider } from 'react-redux';
import App from './ts-App'; // Assuming App.tsx
import store from './store';

// Get the root element from the DOM and assert it's not null
const rootElement = document.getElementById('root') as HTMLElement;

// Create a root using ReactDOM.createRoot()
const root = ReactDOM.createRoot(rootElement);

// Render the app using the root's render method
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
