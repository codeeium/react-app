import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import CartActions from './actions/calculateTotal.jsx';
import { addToCart,removeFromCart } from './actions/addRemoveToCart.js';

const App = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>
        addToCart(product, setCart);
    const handleRemoveFromCart = (product) =>
        removeFromCart(product, setCart);

    const checkout = () => {
        alert(`Your total is $$${
            cart.reduce((acc, item) => 
                acc + item.price * item.quantity, 0).toFixed(2)
        }. Thank you for shopping!`);
        setCart([]);
    };

    return (
        <div className="App">
            <h1>Simple Shopping Cart</h1>
            <ProductList addToCart={handleAddToCart} />
            <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} />
            <CartActions
                cartItems={cart}
                checkout={checkout}
            />
        </div>
    );
};

export default App;
