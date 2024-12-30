import React, { useState, useTransition } from 'react';

const results = ['apple', 'banana', 'orange', 'grape', 'strawberry', 'blueberry', 'pear'];

function App_useTransition() {
    const [query, setQuery] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSearchChange = (e) => {
        const value = e.target.value;
        startTransition(() => {
            setQuery(value); // Mark this update as a transition
        });
    };

    // Filter results based on the query
    const filteredResults = results.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <h1>Search Fruits</h1>
            <input
                type="text"
                placeholder="Search for a fruit..."
                value={query}
                onChange={handleSearchChange}
            />
            {isPending && <p>Loading...</p>}
            <ul>
                {filteredResults.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
        </div>
    );
}

export default App_useTransition;
