import React, { useState, useMemo } from 'react';

function ChildComponent({ data }) {
    console.log('Child rendered');
    return <div>{data}</div>;
}

function ParentComponent() {
    const [count, setCount] = useState(0);

    // Memoize the data passed to child to prevent re-renders
    const staticData = useMemo(() => 'Static Data', []);

    return (
        <div>
            <h1>Parent Component</h1>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <p>Count: {count}</p>

            {/* Child component only re-renders if staticData changes */}
            <ChildComponent data={staticData} />
        </div>
    );
}

export default ParentComponent;
