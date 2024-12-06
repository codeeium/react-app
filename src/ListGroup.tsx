function ListGroup() {
    let city = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    let continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America'];

    return (
        <>
            <h1>City Group</h1>
            {city.length === 0 && <p>No items found</p>}
            <ul className="list-group-horizontal-lg">
                {city.map((city) => (
                    <li className="sample" key={city}>{city}</li>
                ))}
            </ul>
            <h1>Season Group</h1>
            {seasons.length === 0 && <p>No items found</p>}
            <ul className="list-group-item-dark">
                {seasons.map((item) => (
                    <li className="sample" key={item}>{item}</li>
                ))}
            </ul>
            <h1>Continent Group</h1>
            {continents.length === 0 && <p>No items found</p>}
            <ul className="list-group-item-danger">
                {continents.map((item) => (
                    <li className="sample" key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
