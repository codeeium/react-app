import React from 'react';
import Parent from "./components/Parent.jsx";
import ContextProvider from './components/ContextProvider';

const App = () => {
    return (
        <div>
            <Parent />
            <ContextProvider />
        </div>
    );
};

export default App;
