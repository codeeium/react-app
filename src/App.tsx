import React, { useState } from 'react';

const App: React.FC = () => {
    const [state, setState] = useState<string | number>('Hello');

    const toggleState = () => {
        setState((prev) => (typeof prev === 'string' ? 42 : 'Hello'));
    };

    return (
        <div>
            <p>State: {state}</p>
            <button onClick={toggleState}>Toggle State</button>
        </div>
    );
};

export default App;
