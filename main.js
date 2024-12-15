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

// SQL Queries for sales, customers, and orders
const truncateSalesQuery = `
    TRUNCATE TABLE sales RESTART IDENTITY;
`;

const truncateCustomersQuery = `
    TRUNCATE TABLE customers RESTART IDENTITY;
`;

const truncateOrdersQuery = `
    TRUNCATE TABLE orders RESTART IDENTITY;
`;

const insertSalesQuery = `
    INSERT INTO sales (name, id)
    VALUES ('Alice', 1001),
           ('Bob', 1002),
           ('Charlie', 1003),
           ('Diana', 1004),
           ('Eve', 1005) 
    ON CONFLICT DO NOTHING;
`;

const insertCustomersQuery = `
    INSERT INTO customers (name, email)
    VALUES ('Alice', 'alice@example.com'),
           ('Bob', 'bob@example.com'),
           ('Charlie', 'charlie@example.com'),
           ('Diana', 'diana@example.com'),
           ('Eve', 'eve@example.com') 
    ON CONFLICT DO NOTHING;
`;

const insertOrdersQuery = `
    INSERT INTO orders (customer_id, order_amount)
    VALUES (1, 100), (2, 150), (3, 200), (4, 250), (5, 300)
    ON CONFLICT DO NOTHING;
`;

// Update queries between sales, customers, and orders
const updateSalesCustomerQuery = `
    UPDATE sales SET name = 'Alice Cooper' WHERE name = 'Alice';
    UPDATE customers SET email = 'alice.cooper@example.com' WHERE name = 'Alice';
    UPDATE orders SET order_amount = 220 WHERE customer_id = 1;
`;

const updateOrdersQuery = `
    UPDATE orders SET order_amount = 180 WHERE customer_id = 2;
`;

const disableFKConstraintsQuery = `
    -- Disable foreign key constraints
    SET session_replication_role = replica;
`;

const enableFKConstraintsQuery = `
    -- Enable foreign key constraints
    SET session_replication_role = origin;
`;

const deleteSalesQuery = `DELETE FROM sales;`;
const deleteCustomersQuery = `DELETE FROM customers;`;
const deleteOrdersQuery = `DELETE FROM orders;`;

async function handleDatabaseOperations(req, res) {
    try {
        // Step 1: Clear tables in the correct order
        await con.query(deleteOrdersQuery);
        await con.query(deleteCustomersQuery);
        await con.query(deleteSalesQuery);
        console.log('Tables cleared successfully');

        // Step 2: Insert rows into 'sales' and 'customers'
        await con.query(insertSalesQuery);
        const customersInsertResult = await con.query(insertCustomersQuery);
        console.log('Rows inserted successfully into sales and customers');

        // Step 3: Fetch the 'id' values for customers
        const customers = await con.query('SELECT id, name FROM customers');
        console.log('Fetched customer IDs:', customers.rows);

        // Step 4: Prepare and insert orders with the correct 'customer_id'
        const insertOrdersQuery = `
            INSERT INTO orders (customer_id, order_amount)
            VALUES 
            (${customers.rows[0].id}, 100), 
            (${customers.rows[1].id}, 150), 
            (${customers.rows[2].id}, 200), 
            (${customers.rows[3].id}, 250), 
            (${customers.rows[4].id}, 300)
        ON CONFLICT DO NOTHING;
        `;
        await con.query(insertOrdersQuery);
        console.log('Rows inserted successfully into orders');

        // Step 5: Fetch and display rows before updates
        const beforeUpdateSales = await con.query('SELECT * FROM sales');
        const beforeUpdateCustomers = await con.query('SELECT * FROM customers');
        const beforeUpdateOrders = await con.query('SELECT * FROM orders');
        console.log('Sales Data BEFORE Update:', beforeUpdateSales.rows);
        console.log('Customers Data BEFORE Update:', beforeUpdateCustomers.rows);
        console.log('Orders Data BEFORE Update:', beforeUpdateOrders.rows);

        // Step 6: Apply updates
        await con.query(updateSalesCustomerQuery);
        await con.query(updateOrdersQuery);
        console.log('Updates applied successfully');

        // Step 7: Fetch and display rows after updates
        const afterUpdateSales = await con.query('SELECT * FROM sales');
        const afterUpdateCustomers = await con.query('SELECT * FROM customers');
        const afterUpdateOrders = await con.query('SELECT * FROM orders');
        console.log('Sales Data AFTER Update:', afterUpdateSales.rows);
        console.log('Customers Data AFTER Update:', afterUpdateCustomers.rows);
        console.log('Orders Data AFTER Update:', afterUpdateOrders.rows);

        // Send the data as a JSON response to the frontend
        res.json({
            beforeUpdateSales: beforeUpdateSales.rows,
            beforeUpdateCustomers: beforeUpdateCustomers.rows,
            beforeUpdateOrders: beforeUpdateOrders.rows,
            afterUpdateSales: afterUpdateSales.rows,
            afterUpdateCustomers: afterUpdateCustomers.rows,
            afterUpdateOrders: afterUpdateOrders.rows,
        });
    } catch (err) {
        console.error('Query error', err.stack);
        res.status(500).send('Error processing data');
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
