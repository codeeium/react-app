import React, { useState, useEffect } from 'react';

function UseEffect_FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1') // Using a test API
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error('Error fetching data:', error)); // Handle any fetch errors
    }, []); // Empty array means this effect runs once after initial render

    return (<>
        <p>----UseEffect Fetch Data---------</p>
        {data ? JSON.stringify(data) : 'Loading...'}</>);
}

export default UseEffect_FetchData;
