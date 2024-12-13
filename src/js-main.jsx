import React from 'react';
import ReactDOM from 'react-dom/client';
import JsApp from './js-App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root')

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            <JsApp />
        </React.StrictMode>
    );
}
