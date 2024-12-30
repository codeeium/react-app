import React, { useState, useEffect } from 'react';

export default function App_workers() {
    const [result, setResult] = useState(null);
    const [worker, setWorker] = useState(null);

    useEffect(() => {
        // Initialize Web Worker
        const newWorker = new Worker(new URL('./worker.js', import.meta.url));
        setWorker(newWorker);

        // Handle message from worker
        newWorker.onmessage = (e) => {
            setResult(e.data);
        };

        // Cleanup
        return () => newWorker.terminate();
    }, []);

    const handleClick = () => {
        if (worker) {
            worker.postMessage(500000000);  // Send task to worker
        }
    };

    return (
        <div>
            <h1>React Web Worker Example</h1>
            <button onClick={handleClick}>Start Heavy Calculation</button>
            <p>Result: {result !== null ? result : 'Waiting...'}</p>
        </div>
    );
}
