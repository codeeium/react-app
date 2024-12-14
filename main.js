
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

// Insert multiple rows into the `sales` table
const insertQuery = `
    INSERT INTO sales (name, id)
    VALUES 
        ('Alice', 1001),
        ('Bob', 1002),
        ('Charlie', 1003),
        ('Diana', 1004),
        ('Eve', 1005)
    ON CONFLICT DO NOTHING; -- Ensures no duplicate rows are added
`;

con.query(insertQuery)
    .then(() => {
        console.log('Rows inserted successfully');

        // Fetch and display all rows from the `sales` table
        return con.query('SELECT * FROM sales');
    })
    .then(result => {
        console.log('Sales Data:', result.rows);
    })
    .catch(err => console.error('Query error', err.stack))
    .finally(() => con.end());
