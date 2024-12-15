import React, { useState, useCallback } from 'react';


const Button = ({ onClick }) => {
    return <button onClick={onClick}>Click me</button>;
};

const UseCallBack = () => {
    const [count, setCount] = useState(0);

    const memoizedClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <p>-------UseCallBack---------</p>
            <Button onClick={memoizedClick} />
            <p>Count: {count}</p>
        </div>
    );
};

export default UseCallBack;
