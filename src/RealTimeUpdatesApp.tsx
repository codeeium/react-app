import React, { useState, useEffect } from "react";

// Define the type for a message
interface Message {
    id: number;
    user: string;
    text: string;
}

const RealTimeUpdatesApp: React.FC = () => {
    // State for holding messages
    const [messages, setMessages] = useState<Message[]>([]);

    // State for simulating new incoming message
    const [newMessageText, setNewMessageText] = useState<string>("");

    // Function to simulate new message
    const generateNewMessage = () => {
        const newMessage: Message = {
            id: Date.now(),
            user: `User${Math.floor(Math.random() * 10) + 1}`,
            text: `This is a new message at ${new Date().toLocaleTimeString()}`,
        };
        setMessages((prevMessages) => [newMessage, ...prevMessages]);
    };

    // Simulate new messages coming every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(generateNewMessage, 5000);

        // Cleanup on component unmount
        return () => clearInterval(intervalId);
    }, []);

    // Handle sending a new message
    const handleSendMessage = () => {
        if (newMessageText.trim() === "") return; // Prevent empty messages

        const newMessage: Message = {
            id: Date.now(),
            user: "User1",
            text: newMessageText,
        };

        setMessages((prevMessages) => [newMessage, ...prevMessages]);
        setNewMessageText(""); // Clear input after sending
    };

    return (
        <div style={containerStyle}>
            <h1>Real-Time Chat</h1>

            {/* Displaying Messages */}
            <div style={messageContainerStyle}>
                {messages.length === 0 ? (
                    <p>No messages yet</p>
                ) : (
                    messages.map((message) => (
                        <div key={message.id} style={messageStyle}>
                            <strong>{message.user}:</strong> {message.text}
                        </div>
                    ))
                )}
            </div>

            {/* Input and Send Message Button */}
            <div style={inputContainerStyle}>
                <input
                    type="text"
                    value={newMessageText}
                    onChange={(e) => setNewMessageText(e.target.value)}
                    placeholder="Type a message"
                    style={inputStyle}
                />
                <button onClick={handleSendMessage} style={buttonStyle}>
                    Send Message
                </button>
            </div>
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

const messageContainerStyle: React.CSSProperties = {
    maxHeight: "300px",
    overflowY: "auto",
    marginBottom: "20px",
    textAlign: "left",
};

const messageStyle: React.CSSProperties = {
    backgroundColor: "#f1f1f1",
    padding: "8px",
    marginBottom: "5px",
    borderRadius: "4px",
    border: "1px solid #ddd",
};

const inputContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const inputStyle: React.CSSProperties = {
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    marginRight: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

export default RealTimeUpdatesApp;
