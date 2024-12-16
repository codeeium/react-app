import React, { useState } from 'react';
import Child from './Child';
import FruitList from './FruitList';

// Define the type for the message state
type ParentProps = {
    message: string;
};

const Parent: React.FC = () => {
    // Define the state for the message with type string
    const [message, setMessage] = useState<string>("Initial message from Parent");

    // Define the type for the handleMessage function
    const handleMessage = (newMessage: string): void => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>{message}</h1>
            {/* Pass handleMessage as a prop to Child */}
            <Child onSendMessage={handleMessage} />
            <FruitList />
        </div>
    );
};

export default Parent;
