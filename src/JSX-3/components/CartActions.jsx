import React from 'react';

const CartActions = ({ cartItems, checkout }) => {
    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-actions">
            <h3>Total: ${calculateTotal()}</h3>
            <button onClick={checkout} disabled={cartItems.length === 0}>
                Checkout
            </button>
        </div>
    );
};

export default CartActions;
