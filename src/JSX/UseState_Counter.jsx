import React, { useState } from 'react';

function UseState_Counter() {

    // const [Cval, Uval] = useState(initialState);
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>------ UseState Counter ----------</p>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default UseState_Counter;