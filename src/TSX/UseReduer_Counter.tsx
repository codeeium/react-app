import React, { useReducer } from 'react';

// Define types for the state and action
interface State {
    count: number;
}

type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' };

// Reducer function to manage state
const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
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

function UseReduer_Counter() {
    // useReducer hook takes the reducer function and initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>--------UseReducer Counter----------</p>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default UseReduer_Counter;
