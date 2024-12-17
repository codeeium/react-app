import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';
import { RootState, AppDispatch } from'./store'

const App: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    // Select state with proper typing
    const { data, loading, error } = useSelector((state: RootState) => state);

    // Dispatch the async fetchData action on component mount
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
