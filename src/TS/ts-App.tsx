import React, { useState } from 'react';

function TsApp() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    };

    return (
        <div>
            console.log(count)
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default TsApp;