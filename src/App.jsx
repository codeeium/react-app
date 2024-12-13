import React, { useState } from 'react';
import Container from './components/Container.jsx';
import { ThemeContext, UserContext } from './context.jsx';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [user, setUser] = useState({ name: 'John Doe', age: 30 }); // Removed type annotations

    const toggleTheme = () => {
        setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme }}>
            <UserContext.Provider value={user}>
                <button onClick={toggleTheme}>Toggle Theme</button>
                <h1>App</h1>
                <Container />
            </UserContext.Provider>
        </ThemeContext.Provider>
    );
};

export default App;
