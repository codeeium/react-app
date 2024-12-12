import React, { createContext, useState, ReactNode } from 'react';

// Create a context
const MyContext =
    createContext<string | undefined>(undefined);

// Create a provider component
const MyProvider: React.FC<{ children: ReactNode }> =
    ({ children }) => {
    const [value, setValue] = useState('Hello, World!');

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export { MyProvider, MyContext };
