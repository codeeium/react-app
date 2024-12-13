import React, { useState, useEffect } from 'react';

function HelloWorld() {
    const [message, setMessage] = useState("Hello, World!");

    useEffect(() => {
        console.log(message); // Logs the updated message whenever it changes
    }, [message]); // Dependency array includes `message`

    const toggleMessage = () => {
        setMessage((prevMessage) =>
            prevMessage === "Hello, World!" ? "Hello, Universe!" : "Hello, World!"
        );
    };

    return (
        <div>
            <p>{message}</p>
            <button onClick={toggleMessage}>Toggle Message</button>
        </div>
    );
}

export default HelloWorld;
