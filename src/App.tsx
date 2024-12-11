import React, { useState } from 'react';

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>('John');
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isActiveN, setIsActiveN] = useState<boolean>(false);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            <p>Name: {name}</p>
            <p>Active: {isActiveN ? 'Jane' : 'John'}</p>
            <button onClick={() => setIsActiveN(!isActive)}>Toggle Active</button>

            <button onClick={() => setName('Jane')}>Change Name</button>

            <p>Active: {isActive ? 'Yes' : 'No'}</p>
            <button onClick={() => setIsActive(!isActive)}>Toggle Active</button>
        </div>
    );
};

export default App;
