import { useState, useEffect } from "react";

const data = Array.from(
    { length: 100 },
    (_, i) =>
        `Item ${i + 1}`);  // 100 items

const Pagination2 = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const itemsPerPage = 10;

    useEffect(() => {
        setCurrentPage(2);
    }, [currentPage]);

    // Calculate pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
        else{
            setCurrentPage(1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <>
            <p>Current Page: {currentPage} </p>
            <p>itemsPerPage: {itemsPerPage} </p>
            <p>indexOfLastItem: {indexOfLastItem} </p>
            <p>indexOfFirstItem: {indexOfFirstItem} </p>
            <p>currentItems: {currentItems} </p>
            <p>data length : {data.length} </p>
            <p>totalPages: {totalPages} </p>
            <p>nextPage: {nextPage.name} </p>
            <p>prevPage: {prevPage.name} </p>
            <p>prevPage: {prevPage} </p>

        </>
    );
}

export default Pagination2;
