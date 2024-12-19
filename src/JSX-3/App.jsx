import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import CartActions from './components/CartActions.jsx';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);

            if (existingProduct) {
                // If the product exists, increment the quantity
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Otherwise, add the product with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    const checkout = () => {
        alert(`Your total is $${
            cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
        }. Thank you for shopping!`);
        setCart([]); // Clear the cart after checkout
    };

    return (
        <div className="App">
            <h1>Simple Shopping Cart</h1>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cart} removeFromCart={removeFromCart} />
            <CartActions
                cartItems={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkout={checkout}
            />
        </div>
    );
};

export default App;
