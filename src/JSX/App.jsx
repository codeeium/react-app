import React, {useEffect} from "react";
import Header from "./Header.jsx";

const App = () => {

    useEffect(() => {
        const navigation = performance.getEntriesByType("navigation")[0];

        if (navigation) {
            console.log("Navigation type:", navigation.type); // Log the navigation type
            if (navigation.type === "reload") {
                console.log("Page was reloaded");
            } else {
                console.log("Page loaded normally");
            }
        }

        return () => {
            console.log("Component is unmounting");
        };
    }, []);

    return (
        <div className="container mt-4">
            <Header/>
        </div>
    );
};

export default App;
