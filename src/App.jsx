import React, { useState } from 'react';

function TsApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default TsApp;