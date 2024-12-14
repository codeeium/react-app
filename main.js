const express = require('express');
const { Client } = require('pg');

// Initialize Express app
const app = express();
const PORT = 3000;

// PostgreSQL configuration
const con = new Client({
    user: 'dev1',
    host: 'localhost',
    database: 'sales',
    password: 'dev1',
    port: 5432,
});

// Connect to the database
con.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Connection error', err.stack));

// SQL Queries
const truncateQuery = `
    TRUNCATE TABLE sales RESTART IDENTITY;
`;

const insertQuery = `
    INSERT INTO sales (name, id)
    VALUES ('Alice', 1001),
           ('Bob', 1002),
           ('Charlie', 1003),
           ('Diana', 1004),
           ('Eve', 1005) 
    ON CONFLICT DO NOTHING;
`;

const updateQuery = `
    UPDATE sales SET name = 'Alice Cooper' WHERE name = 'Alice';
    UPDATE sales SET id = 2222 WHERE name = 'Bob';
`;

// Common function to handle logic
async function handleDatabaseOperations(req, res) {
    try {
        // Step 1: Truncate table
        await con.query(truncateQuery);
        console.log('Table truncated successfully');

        // Step 2: Insert rows
        await con.query(insertQuery);
        console.log('Rows inserted successfully');

        // Step 3: Fetch and display rows before updates
        const beforeUpdate = await con.query('SELECT * FROM sales');
        console.log('Sales Data BEFORE Update:', beforeUpdate.rows);

        // Step 4: Apply updates
        await con.query(updateQuery);
        console.log('Updates applied successfully');

        // Step 5: Fetch and display rows after updates
        const afterUpdate = await con.query('SELECT * FROM sales');
        console.log('Sales Data AFTER Update:', afterUpdate.rows);

        // Send the data as a JSON response to the frontend
        res.json({
            beforeUpdate: beforeUpdate.rows,
            afterUpdate: afterUpdate.rows
        });
    } catch (err) {
        console.error('Query error', err.stack);
        res.status(500).send('Error fetching data');
    }
}

// Root route to display database data
app.get('/', handleDatabaseOperations);

// Route to display data at /data
app.get('/data', handleDatabaseOperations);

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
