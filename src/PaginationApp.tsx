import React, { useState } from "react";

// Define a TypeScript type for the data items
interface Item {
    id: number;
    name: string;
}

const PaginationApp: React.FC = () => {
    // Sample data for demonstration
    const data: Item[] = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`,
    }));

    // State to track the current page
    const [currentPage, setCurrentPage] = useState<number>(1);

    // Number of items per page
    const itemsPerPage = 10;

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current page's items
    const currentItems = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div style={containerStyle}>
            <h1>Pagination Example</h1>
            <ul style={listStyle}>
                {currentItems.map((item) => (
                    <li key={item.id} style={itemStyle}>
                        {item.name}
                    </li>
                ))}
            </ul>

            {/* Pagination Controls */}
            <div style={paginationStyle}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    style={buttonStyle}
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                    <button
                        key={i}
                        onClick={() => handlePageChange(i + 1)}
                        style={{
                            ...buttonStyle,
                            backgroundColor: currentPage === i + 1 ? "#007BFF" : "#f1f1f1",
                            color: currentPage === i + 1 ? "white" : "black",
                        }}
                    >
                        {i + 1}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    style={buttonStyle}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

// Inline styles for simplicity
const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    textAlign: "center",
};

const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
    marginBottom: "20px",
};

const itemStyle: React.CSSProperties = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
};

const paginationStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "5px",
};

const buttonStyle: React.CSSProperties = {
    padding: "5px 10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    backgroundColor: "#f1f1f1",
    color: "black",
};

export default PaginationApp;
