import React, { useContext } from 'react';
import { MessageContext } from './ContextProvider';

const ContextConsumer = () => {
    const contextMessage = useContext(MessageContext);

    return <h2>{contextMessage}</h2>;
};

export default ContextConsumer;
