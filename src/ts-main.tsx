import React from 'react';
import ReactDOM from 'react-dom/client';
// import TSAppWithFormat from './TS-App-with-format';
import TSAppWithFormat from './TS-App-with-format';
// import AppWithFormat from './ts-App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <div style={{flex: 1, minWidth: '900px'}}>
            <b>All hooks function here</b>
        </div>
        <TSAppWithFormat/>
    </React.StrictMode>
);
