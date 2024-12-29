import React from 'react';

const Cart = ({ cartItems, removeFromCart, increment, decrement }) => {
    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <p>{item.id}</p>
                            <img src={item.image} alt={item.name}/>
                            <p>{item.name}</p>
                            <div>
                                <button onClick={() => decrement(item)}>-</button>
                                {/* Properly calls decrement */}
                                <span>{item.quantity}</span>
                                <button onClick={() => increment(item)}>+</button>
                            </div>
                            <p>${(item.price * item.quantity).toFixed(2)}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
