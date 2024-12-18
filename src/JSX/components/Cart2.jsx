import React from 'react';

const Cart2 = ({cartItem, removeFromCart, checkout}) => {

    const calculateTotal = () => {
        return cartItem.reduce((acc, item) => acc + item.price, 0).toFixed(2)
    }
    return (
        <ul className={"cart"}>
            <h2>Your Cart</h2>
            {cartItem.length === 0} ? 'Cart is empty': {cartItem.map((item, index) => (
            <li key={index}>
                <img src={item.image} alt={item.name}/>
                <p> &{item.price} </p>
            </li>
        ))}

            <div>
                <p> Total: {calculateTotal()}</p>
                <button onClick={checkout} disabled={cartItem.length === 0}>checkout</button>
            </div>
        </ul>
    );
};

export default Cart2;
