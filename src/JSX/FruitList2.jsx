import React, {useState} from 'react';

const FruitList = () => {

    const [fruits, setFruit] = useState(['Apple', 'Banana', 'Orange'])

    const removeItem = (fruitToRemove) => {
        setFruit(fruits.filter(fruit => fruit !== fruitToRemove))
    }

    return (
        <div>
            <h1>something</h1>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>
                        {fruit}
                        <button onClick={() => removeItem(fruit)}>Remove</button>
                    </li>))}

            </ul>
        </div>

    );
};

export default FruitList;
