import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TablePagination, TextField, Paper } from '@mui/material';

const MyDataTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [searchQuery, setSearchQuery] = useState('');

    const data = [
        { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
        { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
        { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
        { id: 4, name: 'David', age: 40, email: 'david@example.com' },
        { id: 5, name: 'Eve', age: 22, email: 'eve@example.com' },
        { id: 6, name: 'Frank', age: 28, email: 'frank@example.com' },
        { id: 7, name: 'Grace', age: 32, email: 'grace@example.com' },
        { id: 8, name: 'Hannah', age: 26, email: 'hannah@example.com' },
        { id: 9, name: 'Ivy', age: 27, email: 'ivy@example.com' },
        { id: 10, name: 'Jack', age: 31, email: 'jack@example.com' },
    ];

    // Sorting function
    const handleRequestSort = (property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    // Filter data based on search query
    const filteredData = data.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort data
    const sortedData = filteredData.sort((a, b) => {
        if (orderBy === 'name') {
            return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        }
        return order === 'asc' ? a.age - b.age : b.age - a.age;
    });

    // Handle page change for pagination
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    // Handle rows per page change
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Reset to page 0 when rows per page changes
    };

    return (
        <Paper sx={{ width: '100%', mb: 2 }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ marginBottom: 2 }}
            />
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? order : 'asc'}
                                    onClick={() => handleRequestSort('name')}
                                >
                                    Name
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'age'}
                                    direction={orderBy === 'age' ? order : 'asc'}
                                    onClick={() => handleRequestSort('age')}
                                >
                                    Age
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedData
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <TableRow hover key={user.id}>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.age}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={filteredData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default MyDataTable;
