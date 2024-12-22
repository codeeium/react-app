// CounterComponent.js
import React from 'react';
import { useSyncExternalStore } from 'react';
import { subscribe, getSnapshot, increment } from './counterStore';

const CounterComponent = () => {
    // Use the custom store with useSyncExternalStore
    const count = useSyncExternalStore(subscribe, getSnapshot);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default CounterComponent;
