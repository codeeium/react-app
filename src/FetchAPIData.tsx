import React, { useEffect, useState } from "react";

// Define a TypeScript type for the user data
interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const FetchAPIData: React.FC = () => {
    // State to store users
    const [users, setUsers] = useState<User[]>([]);
    // State to handle loading and error states
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Fetch data from API
    const fetchUsers = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error("Failed to fetch users");
            }
            const data: User[] = await response.json();
            setUsers(data);
            setLoading(false);
        } catch (err: unknown) {
            setLoading(false);
            setError(err instanceof Error ? err.message : "An unknown error occurred");
        }
    };

    // useEffect to fetch data on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div style={containerStyle}>
            <h1>Fetching and Storing API Data</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {!loading && !error && (
                <ul style={listStyle}>
                    {users.map((user) => (
                        <li key={user.id} style={listItemStyle}>
                            <h3>{user.name}</h3>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
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
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
};

const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
};

const listItemStyle: React.CSSProperties = {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    backgroundColor: "#f9f9f9",
};

export default FetchAPIData;
