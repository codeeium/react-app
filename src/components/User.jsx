import React, { useContext } from 'react';
import { UserContext } from '../context';

const User = () => {
    const userContext = useContext(UserContext);

    if (!userContext) {
        return <div>No user data available.</div>;
    }

    return (
        <div>
            <h2>User Information:</h2>
            <p>Name: {userContext.name}</p>
            <p>Age: {userContext.age}</p>
        </div>
    );
};

export default User;
