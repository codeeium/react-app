import React, { useState, useMemo } from 'react';

function LargeListComponent({ items }) {
    const [sortOrder, setSortOrder] = useState('asc');

    // Memoize sorted list to prevent re-sorting on every render
    const sortedItems = useMemo(() => {
        console.log('Sorting items...');
        return [...items].sort((a, b) => {
            if (sortOrder === 'asc') return a - b;
            return b - a;
        });
    }, [items, sortOrder]);

    return (
        <div>
            <h1>Sorted List</h1>
            <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
                Toggle Sort Order
            </button>
            <ul>
                {sortedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default LargeListComponent;
