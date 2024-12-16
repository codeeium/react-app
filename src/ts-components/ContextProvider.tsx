import React, { createContext } from 'react';
import ContextConsumer from './ContextConsumer';

// Define the type of the context value
interface MessageContextType {
    message: string;
}

// Create the context with an initial value (non-nullable)
export const MessageContext = createContext<MessageContextType | null>(null);

const ContextProvider: React.FC = () => {
    return (
        <MessageContext.Provider value={{ message: "Global Message from Context" }}>
            <ContextConsumer />
        </MessageContext.Provider>
    );
};

export default ContextProvider;
