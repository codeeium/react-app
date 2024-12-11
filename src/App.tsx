import React from 'react';
import { AppData } from './data';    // Importing AppData

const App: React.FC = () => {
    return (
        <>
            {/*{AppData.map(*/}
            {/*    (props, index) => (*/}
            {/*    <div key={index}>*/}
            {/*        <h1>Name: {props.name}</h1>*/}
            {/*        <h2>Age: {props.age}</h2>*/}
            {/*        <h2>Gender: {props.gender}</h2>*/}
            {/*    </div>*/}
            {/*))}*/}

            {AppData.map(
                (props, index) => (
                <div key={index}>
                    <h1>Name: {props.name}</h1>
                    <h2>Age: {props.age}</h2>
                    <h2>Gender: {props.gender}</h2>
                </div>
            )
            )}
        </>


    );
};

export default App;
