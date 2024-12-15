import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './ts-App';
import App from './ts-App';
// import App from './ts-App-full';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement // Type assertion for `getElementById`
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
