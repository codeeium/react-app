// cartItems, removeFromCart, checkout

import React from 'react';

const Cart = (cartItems, removeFromCart, checkout) => {
    const calculateTotal = () => {
        return cartItems.reducer(
            (acc, item) => acc + item.price, 0)
    }
    return (
        <div className={"cart"}>
            <h2>Your Cart</h2>
            {cartItems.length ===0 ?
                (<p>Your cart is empty</p>)

            }


        </div>);
};

export default Cart;
