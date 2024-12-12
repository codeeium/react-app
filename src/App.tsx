import React, { useState } from 'react';

function ShoppingCart() {
    // Using multiple useState hooks
    const [itemCount, setItemCount] = useState(0); // Number of items in the cart
    const [totalPrice, setTotalPrice] = useState(0); // Total price of items
    const [isLoggedIn, setIsLoggedIn] = useState(false); // User login state

    // Handlers for actions
    const addItem = () => {
        setItemCount(itemCount + 1);
        setTotalPrice(totalPrice + 10); // Assume each item costs $10
    };

    const removeItem = () => {
        if (itemCount > 0) {
            setItemCount(itemCount - 1);
            setTotalPrice(totalPrice - 10); // Reduce price by $10
        }
    };

    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>Items in Cart: {itemCount}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>User is {isLoggedIn ? 'Logged In' : 'Logged Out'}</p>

            <button onClick={addItem}>Add Item</button>
            <button onClick={removeItem}>Remove Item</button>
            <button onClick={toggleLogin}>
                {isLoggedIn ? 'Log Out' : 'Log In'}
            </button>
        </div>
    );
}

export default ShoppingCart;
