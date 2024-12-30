import React, { useState } from 'react';

const AsyncLogger = () => {
    const [log, setLog] = useState([]);

    const handleLog = async () => {

        console.log("Logging started...");

        // Simulate asynchronous logging
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Log 1: Data fetched.");

        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Log 2: Data processed.");

        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Log 3: UI updated.");

        // Update the state to display logs in the UI
        setLog([
            "Log 1: Data fetched.",
            "Log 2: Data processed.",
            "Log 3: UI updated."
        ]);
    };

    return (
        <div>
            <h1>Asynchronous Logging Example</h1>
            <button onClick={handleLog}>Start Logging</button>
            <ul>
                {log.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default AsyncLogger;
