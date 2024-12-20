import React, { useState, useMemo } from "react";

const ExpensiveCalculation = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveResult = useMemo(() => {
        console.log("Performing expensive calculation...");
        return count ** 2;
    }, [count]);

    return (
        <div>
            <h1>Count: {count}</h1>
            <h2>Squared: {expensiveResult}</h2>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something..."
            />
        </div>
    );
};

export default ExpensiveCalculation;
