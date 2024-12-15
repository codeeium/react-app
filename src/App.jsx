import React from 'react';
import UseReduer_Counter from './TSX/UseReduer_Counter.tsx';
import UseState_Counter from './TSX/UseState_Counter.tsx';

const App = () => {
    return (
        <>
            <UseState_Counter />
            <UseReduer_Counter />
        </>
    );
};

export default App;
