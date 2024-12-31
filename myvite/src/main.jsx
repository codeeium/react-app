// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';  // Import CSS if needed

// Example Root Component
function App() {
    return <h1>Hello, React with Webpack and Vite!</h1>;
}

// Rendering the App component into the 'root' div in index.html
ReactDOM.render(<App />, document.getElementById('app'));
