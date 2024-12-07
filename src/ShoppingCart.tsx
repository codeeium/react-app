import React, { useState } from "react";

// Define the type for a product
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const ShoppingCart: React.FC = () => {
    // Initial product list
    const [products] = useState<Product[]>([
        { id: 1, name: "Laptop", price: 1200, quantity: 1 },
        { id: 2, name: "Smartphone", price: 800, quantity: 1 },
        { id: 3, name: "Headphones", price: 150, quantity: 1 },
    ]);

    // State for items in the cart
    const [cart, setCart] = useState<Product[]>([]);

    // Add a product to the cart
    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                // If the product is already in the cart, increase its quantity
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                // Add the product to the cart with an initial quantity of 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove a product from the cart
    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    // Update the quantity of a product in the cart
    const updateQuantity = (productId: number, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: newQuantity } : item
                )
            );
        }
    };

    // Calculate the total price
    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div style={containerStyle}>
            <h1>Shopping Cart</h1>
            <div style={productsStyle}>
                <h2>Products</h2>
                <ul style={listStyle}>
                    {products.map((product) => (
                        <li key={product.id} style={productItemStyle}>
                            <h3>{product.name}</h3>
                            <p>Price: ${product.price}</p>
                            <button onClick={() => addToCart(product)} style={buttonStyle}>
                                Add to Cart
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={cartStyle}>
                <h2>Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul style={listStyle}>
                            {cart.map((item) => (
                                <li key={item.id} style={cartItemStyle}>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <p>
                                        Quantity:{" "}
                                        <input
                                            type="number"
                                            value={item.quantity}
                                            onChange={(e) =>
                                                updateQuantity(item.id, parseInt(e.target.value, 10))
                                            }
                                            style={inputStyle}
                                            min="1"
                                        />
                                    </p>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        style={buttonStyle}
                                    >
                                        Remove
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <h3>Total: ${calculateTotal()}</h3>
                    </>
                )}
            </div>
        </div>
    );
};

// Inline styles for simplicity
const containerStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const productsStyle: React.CSSProperties = {
    marginBottom: "20px",
};

const cartStyle: React.CSSProperties = {
    marginTop: "20px",
};

const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
};

const productItemStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    marginBottom: "10px",
    textAlign: "left",
};

const cartItemStyle: React.CSSProperties = {
    borderBottom: "1px solid #ddd",
    paddingBottom: "10px",
    marginBottom: "10px",
};

const buttonStyle: React.CSSProperties = {
    padding: "5px 10px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
    width: "60px",
    marginLeft: "10px",
};

export default ShoppingCart;
