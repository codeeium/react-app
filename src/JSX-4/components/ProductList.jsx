// ProductList.js
import React from 'react';
import products from './Products';  // Importing the products

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <h3>{product.id}</h3>
                    <img src={product.image} alt={product.name}/>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
