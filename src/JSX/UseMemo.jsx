import React, { useState, useMemo as useReactMemo } from 'react';



function ExpensiveComputation(num) {
    const compute =
        num => {
        console.log('Computing...');
        return num * 2;
    };

    const result = useReactMemo(() => compute(num), [num]);

    return <div>Computed result: {result}</div>;
}

function UseMemoApp() {
    const [num, setNum] = useState<number>(1);

    return (
        <div>
            <p>-------UseMemo---------</p><p></p>
            <button onClick={() => setNum(num + 1)}>Increment</button>
            <button onClick={() => setNum(num - 1)}>Decrement</button>
            <button onClick={() => setNum(0)}>Reset</button>
            <p>UseState-num : {num}</p>
            <ExpensiveComputation num={num} />
        </div>
    );
}

export default UseMemoApp;
