import React from 'react';
import ReactDOM from 'react-dom/client';
import ParentComponent from "./Parent.jsx";

const App = () => {

    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <h1> <ParentComponent/></h1>

        </div>
    );
};

export default App;
