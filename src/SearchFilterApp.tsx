import React, { useState } from "react";

// Define a TypeScript interface for the product data
interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
}

const SearchFilterApp: React.FC = () => {
    // Initial product data
    const products: Product[] = [
        { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
        { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
        { id: 3, name: "Shirt", category: "Clothing", price: 25 },
        { id: 4, name: "Shoes", category: "Clothing", price: 50 },
        { id: 5, name: "Headphones", category: "Electronics", price: 150 },
        { id: 6, name: "Pants", category: "Clothing", price: 40 },
    ];

    // States for search text and selected category
    const [searchText, setSearchText] = useState<string>("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");

    // Filter products based on search text and selected category
    const filteredProducts = products.filter((product) => {
        const matchesSearchText = product.name.toLowerCase().includes(searchText.toLowerCase());
        const matchesCategory =
            selectedCategory === "All" || product.category === selectedCategory;

        return matchesSearchText && matchesCategory;
    });

    return (
        <div style={containerStyle}>
            <h1>Search and Filter Products</h1>

            {/* Search Box */}
            <div style={searchBoxStyle}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Search products..."
                    style={inputStyle}
                />
            </div>

            {/* Category Filter */}
            <div style={filterStyle}>
                <label htmlFor="category" style={labelStyle}>
                    Filter by Category:
                </label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={selectStyle}
                >
                    <option value="All">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                </select>
            </div>

            {/* Product List */}
            <ul style={listStyle}>
                {filteredProducts.length === 0 ? (
                    <li>No products found</li>
                ) : (
                    filteredProducts.map((product) => (
                        <li key={product.id} style={productItemStyle}>
                            <h3>{product.name}</h3>
                            <p>Category: {product.category}</p>
                            <p>Price: ${product.price}</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

// Inline styles for simplicity
const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const searchBoxStyle: React.CSSProperties = {
    marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
    padding: "8px",
    width: "100%",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

const filterStyle: React.CSSProperties = {
    marginBottom: "20px",
};

const labelStyle: React.CSSProperties = {
    fontSize: "16px",
    marginRight: "10px",
};

const selectStyle: React.CSSProperties = {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
};

const productItemStyle: React.CSSProperties = {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
};

export default SearchFilterApp;
