import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './App';
import { CartProvider } from './context/CartContext';

const container = document.getElementById('root'); // Get the root container

if (container) {
    const root = ReactDOM.createRoot(container); // Create a root using createRoot API
    root.render(
        <CartProvider>
            <App />
        </CartProvider>
    );
}
