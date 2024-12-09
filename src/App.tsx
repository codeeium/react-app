// App.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
const App: React.FC = () => {

    return (
        <div className="container mt-4">
            <Header />
        </div>
    );
};

export default App;
