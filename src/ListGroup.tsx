function ListGroup() {
    let city = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];
    let seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
    let continents = ['Africa', 'Asia', 'Europe', 'North America', 'South America'];

  const handclicked = (event: MouseEvent) => {
    console.log(event);
  }
    return (
        <>
            <h1>City Group</h1>
            {city.length === 0 && <p>No items found</p>}
            <ul className="list-group-horizontal-lg">
                {city.map((city,index) => (
                    <li className="list-group-item"
                        key={city}
                        onClick={() => console.log(city,index)}>{city}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
