import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <App name='Jagan' age={21} gender='Male'/>
        </React.StrictMode>
    );
}
