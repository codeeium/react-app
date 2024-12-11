import React, { useState } from 'react';
import './styles.css'; // Import the CSS file

const App: React.FC = () => {
    const [isUpdated, setIsUpdated] = useState<boolean>(false);

    const toggleUser = () => {
        setIsUpdated(!isUpdated); // Toggle the state
    };

    return (
        <div className="container">
            <div className="output">
                <div>Hello: {isUpdated ? 'Jane' : 'John'}</div>
                <div>Age: {isUpdated ? 30 : 25}</div>
            </div>
            <h1>{isUpdated ? 'User Updated' : 'User Not Updated'}</h1>
            <button onClick={toggleUser} className="button">
                {isUpdated ? 'Revert User' : 'Update User'}
            </button>
        </div>
    );
};

export default App;
