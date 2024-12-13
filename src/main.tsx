import React from 'react';
import ReactDOM from 'react-dom/client';
import JsApp from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <JsApp />
        </React.StrictMode>
    );
}
