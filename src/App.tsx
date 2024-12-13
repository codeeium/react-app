import React, {useState} from 'react';
import Container from './components/Container';
import {ThemeContext, UserContext, UserContextType} from "./context";

const App = () => {
     const [theme, setTheme] = useState<'light' | 'dark'>('light');
     const [user, setUser] = useState<UserContextType>({ name: 'John Doe', age: 30 });

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
