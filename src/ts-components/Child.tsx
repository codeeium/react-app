import React from 'react';

interface ChildProps {
    onSendMessage: (message: string) => void; // Define the type for the prop
}

const Child: React.FC<ChildProps> = ({ onSendMessage }) => {
    return (
        <div>
            <button onClick={() => onSendMessage("Hello from the Child!")}>
                Send Message to Parent
            </button>
        </div>
    );
};

export default Child;
