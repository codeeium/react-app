import React, { useState } from "react";

// Define a TypeScript interface for the list item
interface ListItem {
    id: number;
    text: string;
}

const DynamicListApp: React.FC = () => {
    // State to hold the list of items
    const [items, setItems] = useState<ListItem[]>([]);

    // State to hold the new item input value
    const [newItemText, setNewItemText] = useState<string>("");

    // Handle adding a new item to the list
    const handleAddItem = () => {
        if (newItemText.trim() === "") return; // Avoid adding empty items

        const newItem: ListItem = {
            id: Date.now(), // Use current timestamp as a unique ID
            text: newItemText,
        };

        setItems([...items, newItem]);
        setNewItemText(""); // Clear the input field after adding
    };

    // Handle removing an item from the list
    const handleRemoveItem = (id: number) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div style={containerStyle}>
            <h1>Dynamic List Update</h1>

            {/* Input for adding new item */}
            <div style={inputContainerStyle}>
                <input
                    type="text"
                    value={newItemText}
                    onChange={(e) => setNewItemText(e.target.value)}
                    placeholder="Enter new item"
                    style={inputStyle}
                />
                <button onClick={handleAddItem} style={buttonStyle}>
                    Add Item
                </button>
            </div>

            {/* List of items */}
            <ul style={listStyle}>
                {items.length === 0 ? (
                    <li>No items added yet</li>
                ) : (
                    items.map((item) => (
                        <li key={item.id} style={listItemStyle}>
                            <span>{item.text}</span>
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                style={removeButtonStyle}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

// Inline styles for simplicity
const containerStyle: React.CSSProperties = {
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const inputContainerStyle: React.CSSProperties = {
    marginBottom: "20px",
};

const inputStyle: React.CSSProperties = {
    padding: "8px",
    fontSize: "16px",
    width: "300px",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
    padding: "8px 15px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

const listStyle: React.CSSProperties = {
    listStyleType: "none",
    padding: 0,
};

const listItemStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ddd",
    marginBottom: "5px",
    backgroundColor: "#f9f9f9",
};

const removeButtonStyle: React.CSSProperties = {
    padding: "5px 10px",
    backgroundColor: "#FF4C4C",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

export default DynamicListApp;
