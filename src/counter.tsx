import React, { useReducer } from 'react';

// Define state type
interface State {
    count: number;
}

// Define action types
interface Action {
    type: 'increment' | 'decrement' | 'reset';
}

// Reducer function to manage state
const initialState = { count: 0 };

function reducer(state:State, action: Action) {

    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function Counter() {
    // useReducer hook takes the reducer function and initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default Counter;
