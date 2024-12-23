import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const App = () => {
    const dispatch = useDispatch();
    const { loading, data, error } =
        useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            <h1>Posts</h1>
            {loading && <p>Loading...</p>}  {/* Show loading state */}
            {error && <p>Error: {error}</p>}  {/* Show error message */}
            {data && data.length > 0 ? (
                data.map((post) => <div key={post.id}>{post.title}</div>)  // Show posts if data exists
            ) : null}
        </div>
    );
};

export default App;
