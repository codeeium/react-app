import React from 'react';
import Parent from "./js-components/Parent.jsx";
import ContextProvider from './js-components/ContextProvider';

const App = () => {
    return (
        <div>
            <Parent />
            <ContextProvider />
        </div>
    );
};

export default App;
