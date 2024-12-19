import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../store/counterSlice';

const UICounter = () => {
    const count = useSelector((state) =>
        state.counter.value); // Get counter value from Redux state

    const dispatch = useDispatch(); // Dispatch actions to Redux

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())} style={{margin: '5px', padding: '10px 20px'}}>
                Increment
            </button>
            <button onClick={() => dispatch(decrement())} style={{margin: '5px', padding: '10px 20px'}}>
                Decrement
            </button>
        </div>
    );
};

export default UICounter;

