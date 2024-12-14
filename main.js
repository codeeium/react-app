const { Client } = require('pg');

const con = new Client({
    user: 'dev1',
    host: 'localhost',
    database: 'sales',
    password: 'dev1',
    port: 5432,
});

con.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

// Truncate the table to clear all existing rows
const truncateQuery = `
    TRUNCATE TABLE sales RESTART IDENTITY;
`;

// Insert multiple rows into the `sales` table
const insertQuery = `
    INSERT INTO sales (name, id)
    VALUES ('Alice', 1001),
           ('Bob', 1002),
           ('Charlie', 1003),
           ('Diana', 1004),
           ('Eve', 1005) 
    ON CONFLICT DO NOTHING; -- Ensures no duplicate rows are added
`;

// Function to update Alice's name and Bob's ID
const updateQuery = `
    UPDATE sales SET name = 'Alice Cooper' WHERE name = 'Alice';
    UPDATE sales SET id = 2222 WHERE name = 'Bob';
`;

con.query(truncateQuery) // Step 1: Truncate the table
    .then(() => {
        console.log('Table truncated successfully');

        // Step 2: Insert new rows
        return con.query(insertQuery);
    })
    .then(() => {
        console.log('Rows inserted successfully');

        // Step 3: Fetch and display all rows before update
        return con.query('SELECT * FROM sales');
    })
    .then(result => {
        console.log('Sales Data BEFORE Update:', result.rows);

        // Step 4: Perform the updates
        return con.query(updateQuery);
    })
    .then(() => {
        console.log('Updates applied successfully');

        // Step 5: Fetch and display all rows after update
        return con.query('SELECT * FROM sales');
    })
    .then(result => {
        console.log('Sales Data AFTER Update:', result.rows);
    })
    .catch(err => console.error('Query error', err.stack))
    .finally(() => con.end());
