import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'age', headerName: 'Age', width: 110, editable: true },
    { field: 'position', headerName: 'Position', width: 180, editable: true },
];

const rows = [
    { id: 1, name: 'John Doe', age: 35, position: 'Software Engineer' },
    { id: 2, name: 'Jane Smith', age: 28, position: 'Product Manager' },
    { id: 3, name: 'Emma Brown', age: 45, position: 'CEO' },
];

const EmployeeTable = () => (
    <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
);

export default EmployeeTable;
