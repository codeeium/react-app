import React, { useState } from 'react';
import Cart from './Cart.jsx';

const App = () => {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Item 1', quantity: 1, price: 10, image: '/images/Apple.jpeg' },
        { id: 2, name: 'Item 2', quantity: 2, price: 15, image: '/images/Banana.jpeg' }
    ]);

    const incrementQuantity = (item) => {
        setCartItems(cartItems.map(i =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ));
    };

    const decrementQuantity = (item) => {
        setCartItems(cartItems.map(i =>
            i.id === item.id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
        ));
    };

    const removeFromCart = (item) => {
        setCartItems(cartItems.filter(i => i.id !== item.id));
    };

    return (
        <div>
            <Cart
                cartItems={cartItems}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeFromCart={removeFromCart}
            />
        </div>
    );
};

export default App;
