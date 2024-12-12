import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [isRunning, setIsRunning] = useState<boolean>(true);

    useEffect(() => {
        let timer: ReturnType<typeof setInterval>;

        if (isRunning) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [isRunning]);

    const handlePause = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setCount(0);
        setIsRunning(false);
    };

    const handleResume = () => {
        setIsRunning(true);
    };

    return (
        <div>
            <h1>Counter: {count}</h1>
            <div>
                {isRunning ? (
                    <button onClick={handlePause}>Pause</button>
                ) : (
                    <button onClick={handleResume}>Resume</button>
                )}
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
