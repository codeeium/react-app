import React, { useState, useEffect } from "react";

const UseStateUseEffect: React.FC = () => {
    const [num, setNum] = useState(0);
    const [message, setMessage] = useState<string>("");

    const addNumber = () => {
        setNum(num + 1);
    };

    // useEffect hook to run a side effect when `num` changes
    useEffect(() => {
        // Update the message when num changes
        setMessage(`The current number is: ${num} 
        by useEffect - even number blue, odd number green`);

        // Change background color if num is even
        if (num % 2 === 0) {
            document.body.style.backgroundColor = "blue"; // Set background color to blue
        } else {
            document.body.style.backgroundColor = "green"; // Reset background color for odd numbers
        }
    }, [num]); // The effect will run whenever `num` changes

    return (
        <>
            <h1>Increment by useState</h1>
            <h1>{num}</h1>
            <button onClick={addNumber}>Click for increment</button>
            <h2>{message}</h2> {/* Display the message on the screen */}
        </>
    );
};

export default UseStateUseEffect;
