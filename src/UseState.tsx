import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p className="blue-text">
                <p>UseState:You clicked {count} times</p>
            </p>
                <p>
                    Purpose: Manages the state within functional components.<br/>
                    const [count, setCount] = useState(0)<br/>
                    count is a variable that holds the current count value and<br/>
                    setCount is a function that updates the count value
                </p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>

        </div>
);
}

export default Counter;
