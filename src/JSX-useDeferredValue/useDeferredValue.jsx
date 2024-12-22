import React, { useState, useDeferredValue } from 'react';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const deferredQuery = useDeferredValue(query); // Deferred value for query

    // Simulate a large list of items
    const items = ['apple', 'banana', 'orange', 'grape', 'pineapple', 'peach', 'apricot', 'blueberry'];

    // Filter items based on the deferred query
    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(deferredQuery.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search fruits"
            />
            <p>Showing results for: {deferredQuery}</p>

            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
