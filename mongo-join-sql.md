db.orders.insertMany([
{ "_id": 1, "customer_id": 101, "total": 500 },
{ "_id": 2, "customer_id": 102, "total": 300 },
{ "_id": 3, "customer_id": 101, "total": 150 }
])

db.customers.insertMany([
{ "_id": 101, "name": "Alice", "status": "Active" },
{ "_id": 102, "name": "Bob", "status": "Inactive" }
])

-- Relational query
SELECT o._id, o.customer_id, o.total, c.name, c.status
FROM orders o
JOIN customers c ON o.customer_id = c._id
WHERE c.status = 'Active';

-- no sql query 


db.orders.aggregate([ { $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "customer_info" } }, 
{ $unwind: "$customer_info" }, 
{ $match: { "customer_info.status": "Active" } }, 
{ $project: { _id: 1, customer_id: 1, total: 1, "customer_info.name": 1, "customer_info.status": 1 } } ]);

db.orders.aggregate([
{
$lookup: {
from: "customers",              // Perform join with the 'customers' collection
localField: "customer_id",      // Match 'customer_id' in 'orders' with '_id' in 'customers'
foreignField: "_id",            // Match '_id' in 'customers'
as: "customer_info"             // Store the joined data in 'customer_info'
}
},
{
$unwind: "$customer_info"         // Flatten the array returned by the lookup
},
{
$match: {
"customer_info.status": "Active" // Filter the results where customer status is 'Active'
}
},
{
$project: {                      // Project the necessary fields from the result
_id: 1,
customer_id: 1,
total: 1,
"customer_info.name": 1,
"customer_info.status": 1
}
}
])
