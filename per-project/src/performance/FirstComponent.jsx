// FirstComponent.jsx
import React from 'react';

const FirstComponent = () => {
    return (
        <div>
            <h2>First Lazy Loaded Component</h2>
            <p>This component is loaded only when the "Load First Component" button is clicked.</p>
        </div>
    );
};

export default FirstComponent;
