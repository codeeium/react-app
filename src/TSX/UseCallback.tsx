import React, { useState, useCallback } from 'react';

interface ButtonProps {
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
    return <button onClick={onClick}>Click me</button>;
};

const UseCallBack: React.FC = () => {
    const [count, setCount] = useState<number>(0);

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
