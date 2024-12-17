import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard.jsx';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from API
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <div>
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Home;

