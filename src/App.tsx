import ListGroup from "./ListGroup";

function App() {
    const cities = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

    const handleSelectItem = (item: string) => {
        console.log(item);
    };

    return (
        <div className="App">
            <ListGroup items={cities} heading="Cities" onSelectItem={handleSelectItem} />
        </div>
    );
}

export default App;
