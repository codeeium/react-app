import React, { useState, useRef } from 'react';

const ChangeBackgroundOnFocus = () => {
    const inputRef = useRef(null);
    const [bgColor, setBgColor] = useState('white');

    const handleFocus = () => {
        setBgColor('lightblue'); // Change background color to light blue
    };

    const handleBlur = () => {
        setBgColor('white'); // Reset background color
    };

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                placeholder="Focus me to change color"
                style={{ backgroundColor: bgColor }}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>
    );
};

export default ChangeBackgroundOnFocus;
