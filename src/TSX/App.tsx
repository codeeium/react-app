import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

// Define the type for the product object
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

const App: React.FC = () => {
    // State to store the products in the cart, typed as an array of Product objects
    const [cart, setCart] = useState<Product[]>([]);

    // Function to add a product to the cart
    const addToCart = (product: Product) => {
        setCart([...cart, product]);
    };

    // Function to remove a product from the cart
    const removeFromCart = (product: Product) => {
        setCart(cart.filter(item => item.id !== product.id));
    };

    // Checkout function, alerting the total and clearing the cart
    const checkout = () => {
        alert(`Your total is $${
            cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)
        }. Thank you for shopping!`);
        setCart([]); // Clear the cart after checkout
    };

    return (
        <div className="App">
            <h1>Simple Shopping Cart</h1>
            <ProductList addToCart={addToCart} />
            <Cart cartItems={cart} removeFromCart={removeFromCart} checkout={checkout} />
        </div>
    );
};

export default App;
