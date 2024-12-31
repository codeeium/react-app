import React, { useState, useEffect, useCallback } from 'react';

// Throttle Function
const throttle = (func, limit) => {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
};

// Debounce Function
const debounce = (func, delay) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

export default
function App() {
    const [query, setQuery] = useState('');
    const [width, setWidth] = useState(window.innerWidth);

    // Handle Search (Debounce)
    const handleSearch = (e) => {
        setQuery(e.target.value);
        console.log('Search for:', e.target.value);
    };
    const debouncedSearch = useCallback(debounce(handleSearch, 300), []);

    // Handle Resize (Throttle)
    const handleResize = () => {
        setWidth(window.innerWidth);
        console.log('Window resized:', window.innerWidth);
    };
    const throttledResize = useCallback(throttle(handleResize, 500), []);

    // Attach Resize Listener
    useEffect(() => {
        window.addEventListener('resize', throttledResize);
        return () => window.removeEventListener('resize', throttledResize);
    }, [throttledResize]);

    return (
        <div>
            <h1>React Throttle & Debounce Example</h1>
            <input
                type="text"
                placeholder="Search..."
                onChange={debouncedSearch}
            />
            <p>Search Query: {query}</p>
            <p>Window Width: {width}px</p>
        </div>
    );
}

