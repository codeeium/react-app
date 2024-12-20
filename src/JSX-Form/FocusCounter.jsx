import React, { useState } from 'react';

const FocusCounter = () => {
    const [focusCount, setFocusCount] = useState(0);

    const handleFocus = () => {
        setFocusCount(prevCount => prevCount + 1); // Increment focus count
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Focus me to count"
                onFocus={handleFocus}
            />
            <p>Input focused {focusCount} times</p>
        </div>
    );
};

export default FocusCounter;
