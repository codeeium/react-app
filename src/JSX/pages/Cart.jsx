import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cart, setCart } = useContext(CartContext);

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    if (cart.length === 0) {
        return <h2 style={styles.empty}>Your cart is empty.</h2>;
    }

    return (
        <div style={styles.container}>
            <h1>Shopping Cart</h1>
            <div style={styles.cartItems}>
                {cart.map((item) => (
                    <div key={item.id} style={styles.cartItem}>
                        <img src={item.image} alt={item.title} style={styles.image} />
                        <div style={styles.details}>
                            <h3>{item.title}</h3>
                            <p style={styles.price}>${item.price.toFixed(2)}</p>
                            <button
                                style={styles.removeButton}
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={styles.summary}>
                <h2>Total: ${totalPrice.toFixed(2)}</h2>
                <button style={styles.checkoutButton}>Proceed to Checkout</button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        padding: '20px',
    },
    cartItems: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '20px',
    },
    cartItem: {
        display: 'flex',
        gap: '20px',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '10px',
        alignItems: 'center',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'contain',
    },
    details: {
        flex: 1,
    },
    price: {
        color: '#007BFF',
        fontWeight: 'bold',
        margin: '10px 0',
    },
    removeButton: {
        backgroundColor: '#FF4D4D',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    summary: {
        textAlign: 'right',
        marginTop: '20px',
    },
    checkoutButton: {
        backgroundColor: '#28A745',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    empty: {
        textAlign: 'center',
        marginTop: '50px',
    },
};

export default Cart;
