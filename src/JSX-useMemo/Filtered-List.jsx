import React, { useMemo, useState } from "react";

// FilteredList component which filters the items based on the filter prop.
const FilteredList = ({ items, filter }) => {
    // Memoizing the filtered items to avoid unnecessary recalculations
    const filteredItems = useMemo(() => {
        console.log("Filtering items...");
        return items.filter((item) => item.includes(filter));
    }, [items, filter]);

    return (
        <ul>
            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
};

// App component to demonstrate the usage of FilteredList
const App_filter_list = () => {
    const [filter, setFilter] = useState(""); // State to manage the filter text
    const items = ["Apple", "Banana", "Cherry", "Date", "Grapes", "Pineapple"]; // List of items

    return (
        <div>
            <h1>Filtered List</h1>
            <input
                type="text"
                placeholder="Filter items..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <FilteredList items={items} filter={filter} />
        </div>
    );
};

export default App_filter_list;
