import React, { useState, useEffect } from "react";

const App: React.FC = () => {
    const [number1, setNumber1] = useState<string>(""); // First input number (as a string initially)
    const [number2, setNumber2] = useState<string>(""); // Second input number (as a string initially)
    const [sum, setSum] = useState<number>(0); // Sum of the numbers
    const [difference, setDifference] = useState<number>(0); // Difference between the numbers

    // Update sum and difference whenever `number1` or `number2` changes
    useEffect(() => {
        const num1 = parseInt(number1, 10) || 0; // Convert to number or default to 0
        const num2 = parseInt(number2, 10) || 0; // Convert to number or default to 0
        setSum(num1 + num2); // Calculate the sum
        setDifference(num1 - num2); // Calculate the difference
    }, [number1, number2]); // Dependencies: this effect will run when `number1` or `number2` changes

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>React useEffect Addition and Subtraction</h1>
            <div>
                <label>
                    Number 1:{" "}
                    <input
                        type="number"
                        value={number1}
                        placeholder="Type your number" // Placeholder text
                        onChange={(e) => setNumber1(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Number 2:{" "}
                    <input
                        type="number"
                        value={number2}
                        placeholder="Type your number" // Placeholder text
                        onChange={(e) => setNumber2(e.target.value)}
                    />
                </label>
            </div>
            <div style={{ marginTop: "20px" }}>
                <h2>Results:</h2>
                <p>Sum: {sum}</p>
                <p>Difference: {difference}</p>
            </div>
        </div>
    );
};

export default App;
