import React from 'react';

const FruitList = () => {
    const fruits = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" },
        { id: 4, name: "Date" }
    ];

    return (
        <ul>
            {fruits.map(fruit => (
                <li key={fruit.id}>{[fruit.id] + "-" + fruit.name}</li>
            ))}
        </ul>
    );
};

export default FruitList;
