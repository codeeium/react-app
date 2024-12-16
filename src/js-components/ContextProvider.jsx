import React, { createContext } from 'react';
import ContextConsumer from './ContextConsumer';

export const MessageContext = createContext();

const ContextProvider = () => {
    return (
        <MessageContext.Provider value="Global Message from Context">
            <ContextConsumer />
        </MessageContext.Provider>
    );
};

export default ContextProvider;
