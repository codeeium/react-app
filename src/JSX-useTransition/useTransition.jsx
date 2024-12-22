import React, { useState, useTransition } from 'react';

const SearchComponent = () => {
    // State for search query and results
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    // Use useTransition to create a transition state and setter
    const [isPending, startTransition] = useTransition();

    // Simulate a delayed search (e.g., API call or heavy computation)
    const handleSearch = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);

        // Using startTransition to wrap the state update that is deferred
        startTransition(() => {
            // Simulate a delay to fetch results
            setTimeout(() => {
                setResults(
                    // Simulated results for the search
                    ['apple', 'banana', 'orange', 'grape', 'pineapple'].filter(item =>
                        item.toLowerCase().includes(newQuery.toLowerCase())
                    )
                );
            }, 100); // Simulating a delay
        });
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search fruits"
            />
            {isPending ? <p>Loading...</p> : <p>Results:</p>}
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchComponent;
