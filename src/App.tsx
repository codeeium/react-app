import React, { useContext } from 'react';
import { MyProvider, MyContext } from './Mycontext';

const MyComponent: React.FC = () => {
    const value = useContext(MyContext); // Access the context value
    return <div>{value}</div>; // Display the context value
};

const App: React.FC = () => {
    return (
        <MyProvider>
            <MyComponent />
        </MyProvider>
    );
};

export default App;
