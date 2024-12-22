import React, { useState, useLayoutEffect, useRef } from 'react';

const LayoutEffectExample = () => {
    const [dimensions, setDimensions] =
        useState({ width: 0, height: 0 });
    const boxRef = useRef(null);

    // useLayoutEffect runs synchronously after all DOM mutations
    useLayoutEffect(() => {
        // Measure the size of the element after DOM has been updated
        const { offsetWidth, offsetHeight } = boxRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
    }, []); // Empty dependency array means this effect runs only once when the component mounts

    return (
        <div>
            <div
                ref={boxRef}
                style={{ width: '300px', height: '150px', backgroundColor: 'lightblue' }}
            >
                I am a box
            </div>
            <p>Width: {dimensions.width}px</p>
            <p>Height: {dimensions.height}px</p>
        </div>
    );
};

export default LayoutEffectExample;
