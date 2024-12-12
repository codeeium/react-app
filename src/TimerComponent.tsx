import React, { useState, useEffect } from 'react';

const TimerComponent: React.FC = () => {
    const [message, setMessage] = useState<string>("Waiting...");

    // useEffect hook to simulate a side effect
    useEffect(() => {
        // Set a timeout to change the message after 3 seconds
        const timer = setTimeout(() => {
            setMessage("Hello, the timer has finished!");
        }, 3000); // 3000ms = 3 seconds

        // Cleanup function to clear the timeout when the component unmounts
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default TimerComponent;
