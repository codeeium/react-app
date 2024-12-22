import React from 'react';
import { greet, sayGoodbye } from './CallBack-Function';

const App = () => {
    // Calling greet and passing sayGoodbye as the callback
    const greetmsg = greet("John", sayGoodbye);
    const saygoodbyemsg = sayGoodbye("John");

    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <h2>{greetmsg}</h2>
            <h2>{saygoodbyemsg}</h2> {/* Invoke sayGoodbye function */}
        </div>
    );
};

export default App;
