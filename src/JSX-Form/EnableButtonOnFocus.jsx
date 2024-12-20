import React, { useState } from 'react';

const EnableButtonOnFocus = () => {
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const handleFocus = () => {
        setIsButtonEnabled(true); // Enable the button on focus
    };

    const handleBlur = () => {
        setIsButtonEnabled(false); // Disable the button on blur
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Focus to enable button"
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <br />
            <button disabled={!isButtonEnabled}>
                {isButtonEnabled ? 'Button Enabled' : 'Button Disabled'}
            </button>
        </div>
    );
};

export default EnableButtonOnFocus;
