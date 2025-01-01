import React from 'react';
import { FixedSizeList as List } from 'react-window';

// Sample data (A large list of items)
const items = Array.from(
    { length: 1000 },
    (_, index) => `Item ${index + 1}`);

function App_virtualization() {
    // Render a row for each item in the list
    const Row = ({ index, style }) => (
        <div style={style}>
            {items[index]}
        </div>
    );

    return (
        <div style={{ height: '100vh', width: '300px' }}>
            <h1>List Virtualization with react-window</h1>
            <List
                height={500}      // Height of the visible window (in pixels)
                itemCount={items.length}  // Total number of items in the list
                itemSize={35}      // Height of each item in the list (in pixels)
                width={300}        // Width of the list container
            >
                {Row}
            </List>
        </div>
    );
}

export default App_virtualization;
