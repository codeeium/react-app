import React, { useContext } from 'react';
import { MessageContext } from './ContextProvider';

// Define the type of the context value
interface MessageContextType {
    message: string;
}

const ContextConsumer: React.FC = () => {
    // Use context and type it to the expected structure
    const contextMessage = useContext(MessageContext);

    // Ensure that the contextMessage is of type MessageContextType
    if (!contextMessage) {
        return <h2>Loading...</h2>; // Fallback if contextMessage is not provided
    }

    return <h2>{contextMessage.message}</h2>;
};

export default ContextConsumer;
