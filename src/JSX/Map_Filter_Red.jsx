import React, { useState } from 'react';

/*

Filter then map to display
then reduce to calculate total

 */
function M_F_R() {
    // Example product data
    const products = [
        { id: 1, name: 'Laptop', price: 1500 },
        { id: 2, name: 'Smartphone', price: 800 },
        { id: 3, name: 'Tablet', price: 400 },
        { id: 4, name: 'Headphones', price: 200 },
        { id: 5, name: 'Smartwatch', price: 300 },
    ];

    // State for price threshold
    const [priceThreshold, setPriceThreshold] = useState(500);

    // 1. Filter products based on price threshold
    const filteredProducts = products.filter((product) =>
        product.price > priceThreshold);

    // 2. Map filtered products to render their names and prices
    const productElements = filteredProducts.map((product) => (
        <li key={product.id}>
            {product.name} - ${product.price}
        </li>
    ));

    // 3. Reduce filtered products to calculate total price
    const totalPrice = filteredProducts.reduce((sum, product) =>
        sum + product.price, 0);

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Product List</h1>

            {/* Input to set price threshold */}
            <label>
                Price Threshold: $
                <input
                    type="number"
                    value={priceThreshold}
                    onChange={(e) => setPriceThreshold(Number(e.target.value))}
                    style={{ padding: '5px', margin: '10px' }}
                />
            </label>

            {/* Display filtered products */}
            <h2>Filtered Products (Price {'>'} ${priceThreshold})</h2>
            <ul>{productElements}</ul>

            {/* Display total price of filtered products */}
            <h3>Total Price: ${totalPrice}</h3>
        </div>
    );
}

export default M_F_R;
