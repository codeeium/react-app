import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for the theme context
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<string>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemedComponent() {
    const context = useContext(ThemeContext);

    // If context is undefined, throw an error (this shouldn't happen if the provider is used correctly)
    if (!context) {
        throw new Error('useContext must be used within a ThemeProvider');
    }

    const { theme, setTheme } = context;

    return (
        <div>
            <p>The current theme is {theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
        </div>
    );
}

function UseContext() {
    return (
        <>
            <p>-------UseContext---------</p><p></p>
            <ThemeProvider>
                <ThemedComponent />
            </ThemeProvider>
        </>
    );
}

export default UseContext;