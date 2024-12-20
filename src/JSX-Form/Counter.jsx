import React, { useState, useRef } from 'react';

const FocusWithState = () => {

    const [message, setMessage] = useState('');
    const inputRef = useRef(null);

    const handleFocus = () => {
        setMessage('Input field is focused!');
    };

    const handleBlur = () => {
        setMessage('Input field lost focus.');
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Focus me"
                onFocus={handleFocus} // Trigger when focused
                onBlur={handleBlur}   // Trigger when focus is lost
            />
            <p>{message}</p>
        </div>
    );
};

export default FocusWithState;
