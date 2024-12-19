import React from 'react';

// Define the type for the product object
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

// Define the type for the component props
interface ProductListProps {
    addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ addToCart }) => {
    // Array of products with type annotations for each product
    const products: Product[] = [
        { id: 1, name: 'Apple', price: 1.5, image: '/images/Apple.jpeg' },
        { id: 2, name: 'Banana', price: 0.5, image: '/images/Banana.jpeg' },
        { id: 3, name: 'Orange', price: 1.0, image: '/images/Orange.jpeg' }
    ];

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>£{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
