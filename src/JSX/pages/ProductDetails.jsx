import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductDetails() {
    const { id } = useParams(); // Get the product ID from the URL
    const { addToCart } = useContext(CartContext); // Access the addToCart function from context
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch product details from API
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!product) {
        return <p>Product not found.</p>;
    }

    return (
        <div style={styles.container}>
            <img src={product.image} alt={product.title} style={styles.image} />
            <div style={styles.details}>
                <h1>{product.title}</h1>
                <p style={styles.price}>${product.price.toFixed(2)}</p>
                <p>{product.description}</p>
                <button style={styles.button} onClick={() => addToCart(product)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        marginTop: '20px',
        padding: '20px',
    },
    image: {
        width: '300px',
        height: '300px',
        objectFit: 'contain',
        borderRadius: '10px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        maxWidth: '500px',
    },
    price: {
        color: '#007BFF',
        fontWeight: 'bold',
        fontSize: '24px',
        margin: '10px 0',
    },
    button: {
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
    },
};

export default ProductDetails;
