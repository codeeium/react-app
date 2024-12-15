import React from 'react';
import ReactDOM from 'react-dom/client';
// import AppWithFormat from './js-App.jsx';
import JSAppWithFormat from './JS-App-with-format';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div style={{flex: 1, minWidth: '900px'}}>
            <b>All hooks function here</b>
        </div>

        <JSAppWithFormat/>
    </React.StrictMode>
);
