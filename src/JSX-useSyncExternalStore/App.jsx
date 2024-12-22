import React from 'react';
import CounterComponent from "./CounterComponent.jsx";

const App = () => {
    // Calling greet and passing sayGoodbye as the callback

    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <h1> <CounterComponent/></h1>

        </div>
    );
};

export default App;
