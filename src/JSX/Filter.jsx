import React, { useState } from 'react';

function Filter() {
    // Example data
    const [searchTerm, setSearchTerm] = useState('');
    const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

    // Filtered items based on the search term
    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Filter Example</h1>

            {/* Input field to filter items */}
            <input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ padding: '10px', width: '100%', marginBottom: '20px' }}
            />

            {/* Display filtered items */}
            <ul>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => <li key={index}>{item}</li>)
                ) : (
                    <li>No items found</li>
                )}
            </ul>
        </div>
    );
}

export default Filter;
