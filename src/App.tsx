import React, { useState } from 'react';

type Item<T> = {
    id: number;
    value: T;
};

const App: React.FC = () => {
    const [items, setItems] = useState<Item<string>[]>([]);

    const addItem = () => {
        setItems([...items, { id: items.length + 1, value: `Item ${items.length + 1}` }]);
    };

    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </div>
    );
};

export default App;
