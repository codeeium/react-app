import React, {useState} from 'react';

function useUser() {
    const [user, setUser] =
        useState({ name: 'John Doe' });
    return user;
}

function Profile() {
    const user = useUser();
    return <h1>{user.name}</h1>;
}

function App() {
    return (
        <div>
            <Profile />
        </div>
    );
}

export default App