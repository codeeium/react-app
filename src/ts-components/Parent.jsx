import React, {useState} from 'react';
import Child from './Child';
import FruitList from './FruitList';

const Parent = () => {
    const [message, setMessage] =
        useState("Initial message from Parent");

    const handleMessage = (newMessage) => {
        setMessage(newMessage);
    };

    return (
        <div>
            <h1>{message}</h1>
            <Child onSendMessage={handleMessage}/>
            <FruitList/>
        </div>
    );
};

export default Parent;
