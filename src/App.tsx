import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";

const App: React.FC = () => {
    // Define the products in the store
    const products = [
        { id: 1, name: "Product 1", price: 10, image: "https://via.placeholder.com/150" },
        { id: 2, name: "Product 2", price: 20, image: "https://via.placeholder.com/150" },
        { id: 3, name: "Product 3", price: 30, image: "https://via.placeholder.com/150" },
    ];

    // State for the cart
    const [cart, setCart] = useState<any[]>([]);

    // Add a product to the cart
    const addToCart = (product: any) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove a product from the cart
    const removeFromCart = (id: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Clear the cart
    const clearCart = () => {
        setCart([]);
    };

    return (
        <div className="App">
            <h1>Shopping Cart</h1>

            <div className="product-list">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>

            <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        </div>
    );
};

export default App;
