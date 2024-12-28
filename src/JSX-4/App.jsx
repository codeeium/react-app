import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import CartActions from './actions/calculateTotal.jsx';
import { addToCart, removeFromCart, Decrement } from './actions/addRemoveToCart.js';

const App = () => {
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) =>
        addToCart(product, setCart);
    const handleRemoveFromCart = (product) =>
        removeFromCart(product, setCart);

    const incrementQuantity = (product) =>
        addToCart(product, setCart);
    const decrementQuantity = (product) =>
        Decrement(product, setCart);  // Fixed to call Decrement instead of removeFromCart

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
            <Cart cartItems={cart}
                  removeFromCart={handleRemoveFromCart}
                  increment={incrementQuantity}
                  decrement={decrementQuantity}  // Pass decrementQuantity to Cart
            />
            <CartActions
                cartItems={cart}
                checkout={checkout}
            />
        </div>
    );
};

export default App;
