import React, { useState } from "react";

// Define a type for the form data
interface FormData {
    name: string;
    email: string;
    password: string;
}

const FormHandling: React.FC = () => {
    // State for form data
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: "",
    });

    // State for handling form submission message
    const [message, setMessage] = useState<string>("");

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value, // Dynamically update the field based on input's name
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setMessage("Form submitted successfully!");
        // Reset form fields
        setFormData({
            name: "",
            email: "",
            password: "",
        });
    };

    return (
        <div style={formStyle}>
            <h2>React TypeScript Form</h2>
            <form onSubmit={handleSubmit} style={formContainer}>
                <div style={inputContainer}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div style={inputContainer}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div style={inputContainer}>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
            </form>
            {message && <p style={{ color: "green", marginTop: "10px" }}>{message}</p>}
        </div>
    );
};

// Inline styles for simplicity
const formStyle: React.CSSProperties = {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
};

const formContainer: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
};

const inputContainer: React.CSSProperties = {
    marginBottom: "15px",
};

const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
};

export default FormHandling;
