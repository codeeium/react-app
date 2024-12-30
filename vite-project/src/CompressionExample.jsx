import React, { useState, useEffect } from 'react';
import LZString from 'lz-string';

// Simulate fetching data from an API
const fetchData = async () => {
    const response =
        await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
};

const CompressionExample = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if compressed data exists in localStorage
        const compressedData = localStorage.getItem('compressedData');

        if (compressedData) {
            // Decompress data from localStorage
            const decompressedData = LZString.decompressFromUTF16(compressedData);
            if (decompressedData) {
                setData(JSON.parse(decompressedData)); // Use decompressed data
                setLoading(false);
            } else {
                fetchAndStoreData();
            }
        } else {
            fetchAndStoreData();
        }
    }, []);

    const fetchAndStoreData = () => {
        fetchData()
            .then(fetchedData => {
                setData(fetchedData);
                // Compress data before storing in localStorage
                const compressedData = LZString.compressToUTF16(JSON.stringify(fetchedData));
                localStorage.setItem('compressedData', compressedData); // Store compressed data
                setLoading(false);
            })
            .catch(err => {
                setError('Error fetching data');
                setLoading(false);
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default CompressionExample;
