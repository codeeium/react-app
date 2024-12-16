import React from 'react';
import Parent from "./ts-components/Parent";
import ContextProvider from './ts-components/ContextProvider';

const App = () => {
    return (
        <div>
            <Parent />
            <ContextProvider />
        </div>
    );
};

export default App;
