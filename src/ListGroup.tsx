import {MouseEvent, useState} from "react";

interface ListProps {
    items: string[];
    heading: string;
}

function ListGroup({items, heading}: ListProps) {
    let city = ['New York', 'San Francisco', 'Tokyo', 'London', 'Paris'];

    const [selectedIndex, setSelectedIndex] = useState(-1)

const handleClick = (event:MouseEvent) => {
    console.log(event);
}
    return (
        <>
            <h1>{heading}</h1>
            {city.length === 0 && <p>No items found</p>}
            <ul className="list-group">
                {city.map((city,index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                        key={city}
                        onClick={() => setSelectedIndex(index)}
                    >{city}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
