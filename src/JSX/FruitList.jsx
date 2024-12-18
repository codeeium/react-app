import React, {useState} from 'react';

const FruitList = () => {
    // Initialize state with default fruits array
    const [fruits, setFruits] = useState(['apple', 'banana', 'orange']);

    // Function to remove a fruit from the list
    const removeFruit = (fruitToRemove) => {
        setFruits(fruits.filter(fruit => fruit !== fruitToRemove));
    };

    return (
        <div>
            <h1>Fruit List</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                        <button onClick={() => removeFruit(fruit)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FruitList;
