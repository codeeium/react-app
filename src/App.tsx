import React from 'react';

const App: React.FC = () => {
    const message = 'Hello, World!';
    return (
        <div>
            <h1 className='align-content-sm-center'>{message}</h1>
            <h1 className='align-content-sm-center'>{message}</h1>
        </div>
    );
};

export default App;
