import ListGroup from "./ListGroup";

function App() {
    let city = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

    return (
        <div className="App">
            <ListGroup items={city} heading="Cities"/>
        </div>
    );
}

export default App;