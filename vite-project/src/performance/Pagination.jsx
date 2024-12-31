import React, { useState } from 'react';
import '../App.css';

const data = Array.from(
    { length: 100 },
    (_, i) =>
        `Item ${i + 1}`);  // 100 items

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Page change handlers
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="App">
            <h1>React Pagination</h1>

            <ul>
                {currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <div className="pagination">
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>

                <span> Page {currentPage} of {totalPages} </span>

                <button onClick={nextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Pagination;
