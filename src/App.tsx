import React, { useState } from 'react';

type User = {
    name: string;
    age: number;
};

const App: React.FC = () => {
    const [user, setUser] = useState<User>({ name: 'John', age: 25 });

    const updateUser = () => {
        setUser({ ...user, name: 'Jane', age: 30 });
    };

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <button onClick={updateUser}>Update User</button>
        </div>
    );
};

export default App;
