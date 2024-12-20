import React, { useState, useRef } from 'react';

const TooltipOnFocus = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleFocus = () => {
        setShowTooltip(true); // Show tooltip on focus
    };

    const handleBlur = () => {
        setShowTooltip(false); // Hide tooltip on blur
    };

    return (
        <div style={{ position: 'relative', width: '200px' }}>
            <input
                type="text"
                placeholder="Focus me"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ width: '100%' }}
            />
            {showTooltip && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: '0',
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '5px',
                        borderRadius: '3px',
                        fontSize: '12px',
                        marginTop: '5px',
                    }}
                >
                    This is a tooltip
                </div>
            )}
        </div>
    );
};

export default TooltipOnFocus;
