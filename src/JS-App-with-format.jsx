import React, { useState, useReducer, useEffect, useContext, useRef, useMemo, useCallback } from 'react';



// UseState Counter
function UseStateCounter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>UseState Counter </h3>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

// UseReducer Counter
function UseReducerCounter(){
    const initialState = 0;


    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            case 'reset':
                return 0;
            default:
                throw new Error();
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3> UseReducer Counter </h3>
            <p>Count: {count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

// UseEffect Fetch Data
function UseEffectFetchData(){
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div>
            <h3> UseEffect Fetch Data </h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

// UseContext
const ThemeContext = React.createContext(undefined);

function UseContext(){
    const [theme, setTheme] = useState('light');
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div>
                <h3> UseContext </h3>
                <p>The current theme is {theme}</p>
                <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
            </div>
        </ThemeContext.Provider>
    );
}

// UseRef FocusInput
function UseRefFocusInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <h3> UseRef_FocusInput </h3>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

// UseMemo
function UseMemoComponent(){
    const [num, setNum] = useState(1);
    const result = useMemo(() => num * 2, [num]);
    return (
        <div>
            <h3> UseMemo </h3>
            <button onClick={() => setNum(num + 1)}>Increment</button>
            <p>UseState-num: {num}</p>
            <p>Computed result: {result}</p>
        </div>
    );
}

// UseCallback
function UseCallbackComponent() {
    const [count, setCount] = useState(0);
    const memoizedClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    return (
        <div>
            <h3> UseCallback </h3>
            <button onClick={memoizedClick}>Click me</button>
            <p>Count: {count}</p>
        </div>
    );
}

// TSAppWithFormat Component
function JSAppWithFormat() {
    return (

        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px'}}>

                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseStateCounter/>
                </div>
                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseReducerCounter/>
                </div>

                <div style={{flex: 1, minWidth: '100px'}}>
                    <UseContext/>
                </div>
                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseRefFocusInput/>
                </div>
                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseMemoComponent/>
                </div>
                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseCallbackComponent/>
                </div>
                <div style={{flex: 1, minWidth: '300px'}}>
                    <UseEffectFetchData/>
                </div>
            </div>
            );
            }

export default JSAppWithFormat;
