import React from 'react';

function ItemList() {
    const items = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' }
    ];

    return (
        <ul>
            {items.map(item => (
                // Using a unique id as the key
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

export default ItemList;
