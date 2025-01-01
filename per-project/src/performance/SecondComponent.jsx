// SecondComponent.js
import React from 'react';

const SecondComponent = () => {
    return (
        <div>
            <h2>Second Lazy Loaded Component</h2>
            <p>This component is loaded only when the "Load Second Component" button is clicked.</p>
        </div>
    );
};

export default SecondComponent;
