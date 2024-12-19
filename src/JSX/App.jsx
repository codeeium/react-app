// App.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const App = () => {
    const dispatch = useDispatch();
    const { data, loading, error } =
        useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Fetched Data</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default App;
