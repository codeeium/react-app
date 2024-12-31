import React, { useState, useEffect } from 'react';

// Function to fetch data from API
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data2 = await response.json();
    return data;
};

const CachingExample = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if data is already cached in localStorage
        const cachedData = localStorage.getItem('cachedData');

        if (cachedData) {
            setData(JSON.parse(cachedData));  // Use cached data
            setLoading(false);
        } else {
            // Fetch data if not in cache
            fetchData()
                .then(fetchedData => {
                    setData(fetchedData);
                    localStorage.
                    setItem('cachedData', JSON.stringify(fetchedData));
                    setLoading(false);
                })
                .catch(err => {
                    setError('Error fetching data');
                    setLoading(false);
                });
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>

            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};

export default CachingExample;
