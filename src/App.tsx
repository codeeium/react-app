import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(prevVal => prevVal + 1);
    };

    const Decrement = () => {
        setCount(prevVal => prevVal - 1);
    };

    const Reset = () => {
        setCount(0);
    };

    return (
        <div className="container text-center mt-5">
            <h1>Incremental and Decremental</h1>
            <div className="my-4">
                <button className="btn btn-primary mx-2" onClick={Increment}>Increment</button>
                <button className="btn btn-danger mx-2" onClick={Decrement}>Decrement</button>
                <button className="btn btn-secondary mx-2" onClick={Reset}>Reset</button>
            </div>
            <div className="d-flex justify-content-center">
                <h1 aria-label="count">{count}</h1>
            </div>
        </div>
    );
};

export default App;
