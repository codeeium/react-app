import React, { useState } from 'react';

const AnimateOnFocus = () => {
    const [animate, setAnimate] = useState(false);

    const handleFocus = () => {
        setAnimate(true);
    };

    const handleBlur = () => {
        setAnimate(false);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Focus me to animate"
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ marginBottom: '10px' }}
            />
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'tomato',
                    transition: 'transform 0.5s',
                    transform: animate ? 'scale(1.2)' : 'scale(1)',
                }}
            />
        </div>
    );
};

export default AnimateOnFocus;
