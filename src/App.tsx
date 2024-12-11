import React, {useState} from 'react';

const App: React.FC = (props) => {

    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Gender: {props.gender}</h2>

        </>
    )
};

export default App;
