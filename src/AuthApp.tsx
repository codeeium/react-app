import React, { useState } from "react";

// Define the state type for authentication
interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

const AuthApp: React.FC = () => {
    // Initial state for authentication
    const [authState, setAuthState] = useState<AuthState>({
        isAuthenticated: false,
        user: null,
    });

    // Handle login
    const handleLogin = (username: string) => {
        setAuthState({
            isAuthenticated: true,
            user: username,
        });
    };

    // Handle logout
    const handleLogout = () => {
        setAuthState({
            isAuthenticated: false,
            user: null,
        });
    };

    return (
        <div style={containerStyle}>
            <h1>Authentication Example</h1>

            {authState.isAuthenticated ? (
                <div>
                    <p>Welcome, {authState.user}!</p>
                    <button onClick={handleLogout} style={buttonStyle}>
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <p>Please log in</p>
                    <button
                        onClick={() => handleLogin("John Doe")}
                        style={buttonStyle}
                    >
                        Log in as John Doe
                    </button>
                </div>
            )}
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

const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
};

export default AuthApp;
