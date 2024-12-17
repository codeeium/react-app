import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product, addToCart }) {
    return (
        <div style={styles.card}>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.title} style={styles.image} />
                <h3 style={styles.title}>{product.title}</h3>
            </Link>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '200px',
    },
    image: {
        width: '100%',
        height: '150px',
        objectFit: 'contain',
        marginBottom: '8px',
    },
    title: {
        fontSize: '16px',
        margin: '8px 0',
        fontWeight: 'bold',
    },
    price: {
        color: '#007BFF',
        fontWeight: 'bold',
        marginBottom: '16px',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default ProductCard;
