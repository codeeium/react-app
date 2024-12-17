import React from 'react';

const Cart = ({ cartItems, removeFromCart, checkout }) => {
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <h3>Total: ${calculateTotal()}</h3>
                <button onClick={checkout} disabled={cartItems.length === 0}>
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Cart;
