import React, { useState } from "react";

// Define the Counter component
const Counter: React.FC = () => {
    // Define the state for the counter
    const [count, setCount] = useState<number>(0);

    // Handlers for increment, decrement, and reset
    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => prevCount - 1);
    const reset = () => setCount(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Counter Application</h1>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={increment} style={buttonStyle}>
                    Increment
                </button>
                <button onClick={decrement} style={buttonStyle}>
                    Decrement
                </button>
                <button onClick={reset} style={buttonStyle}>
                    Reset
                </button>
            </div>
        </div>
    );
};

// Styling for buttons
const buttonStyle: React.CSSProperties = {
    margin: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
};

export default Counter;
