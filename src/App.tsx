import React, { useEffect } from "react";
import ListGroup from "./ListGroup";

function App() {
    useEffect(() => {
        // Get navigation entries from the performance API
        const navigation = performance.getEntriesByType("navigation")[0];

        // Type assertion to let TypeScript know it's a PerformanceNavigationTiming object
        if (navigation && (navigation as PerformanceNavigationTiming).type === "reload") {
            console.log("Page was reloaded");
        } else {
            console.log("Page loaded normally");
        }

        // Optional cleanup if needed
        return () => {
            console.log("Component is unmounting");
        };
    }, []);

    return (
        <div className="App">
            <ListGroup />
        </div>
    );
}

export default App;
