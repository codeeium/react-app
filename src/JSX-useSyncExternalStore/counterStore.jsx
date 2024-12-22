// counterStore.js

let listeners = [];
let count = 0;

// Subscribe function: adds listener to the list
const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
        listeners = listeners.filter((l) => l !== listener);
    };
};

// Get snapshot function: returns the current count value
const getSnapshot = () => count;

// Update function to change the count value and notify listeners
const increment = () => {
    count += 1;
    listeners.forEach((listener) => listener()); // Notify all listeners about the update
};

export { subscribe, getSnapshot, increment };
