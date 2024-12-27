import React, { useState } from 'react';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import CartActions from './actions/CartActions.jsx';
import { addToCart } from './actions/addToCart';
import { removeFromCart } from './actions/removeFromCart';
import { checkout } from './actions/checkout';

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <div className="App">
            <h1>Simple Shopping Cart</h1>
            <ProductList addToCart={(product) => addToCart(product, cart, setCart)} />
            <Cart cartItems={cart} removeFromCart={(product) => removeFromCart(product, cart, setCart)} />
            <CartActions
                cartItems={cart}
                addToCart={(product) => addToCart(product, cart, setCart)}
                removeFromCart={(product) => removeFromCart(product, cart, setCart)}
                checkout={() => checkout(cart, setCart)}
            />
        </div>
    );
};

export default App;