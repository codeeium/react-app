import React, { useState } from 'react';
import Child from './Child';
import FruitList from './FruitList';

const Parent = () => {
    const [message, setMessage] = useState("Initial message from Parent");
    const [isToggled, setIsToggled] = useState(false); // Toggle state

    const handleMessage = (newMessage) => {
        setMessage(newMessage);
    };

    const toggleMessage = () => {
        setIsToggled(prevState => !prevState); // Toggle the state
    };

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={toggleMessage}>{isToggled ? 'Hide' : 'Show'} Message</button>
            {isToggled && <p>This is a toggled message!</p>} {/* Conditionally rendered */}

            <Child onSendMessage={handleMessage} />
            <FruitList />
        </div>
    );
};

export default Parent;
