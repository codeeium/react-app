
import React from 'react';

const Child = ({ onSendMessage }) => {
    return (
        <div>
            <button onClick={() => onSendMessage("Hello from the Child!")}>
                Send Message to Parent
            </button>
        </div>
    );
};

export default Child;
