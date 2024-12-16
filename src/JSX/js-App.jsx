// App.js
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addItem} from './actions.jsx';

const App = () => {
    const [itemName, setItemName] = useState('');
    const dispatch = useDispatch();
    const items = useSelector(state => state.items);

    const handleAddItem = () => {
        if (itemName) {
            const newItem = {id: Date.now(), name: itemName};
            dispatch(addItem(newItem));  // Dispatch the action
            setItemName('');  // Reset input field
        }
    };

    return (
        <div>
            <h1>Item List Redux </h1>
            <h1>the reducer function </h1>
            <input
                type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                placeholder="Enter item name"
            />
            <button onClick={handleAddItem}>Add Item</button>

            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
