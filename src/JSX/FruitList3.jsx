import React, {useState} from 'react';

const Fruitslist = () => {
    const [fruits, setFruit] = useState(['Apple', 'Banana', 'Orange'])
    const RemoveFruits = (toBeRemoved) => {
        setFruit(fruits.filter(fruit => fruit !== toBeRemoved))
    }
    return (<div>
        <h1>Welcome to the list of fruits</h1>
        <ul>
            {fruits.map((fruit, index) => (<li key={index}>
                    {fruit}
                    <button onClick={() => RemoveFruits(fruit)}>Remove</button>

                </li>

            ))}

        </ul>

    </div>);
};

export default Fruitslist;
