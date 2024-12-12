import React from 'react';
import ReactDOM from 'react-dom/client';
// import UseStateUseEffect from './useState-useEffect';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
        <React.StrictMode>
            {/*<UseStateUseEffect />*/}
            <App />
        </React.StrictMode>
    );
}
