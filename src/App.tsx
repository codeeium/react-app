import React from 'react';
import {AppProps} from "./types";

const App: React.FC<AppProps> = (props) => {

    return (
        <>
            <h1>Name: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h2>Gender: {props.gender}</h2>
        </>
    )
};

const AppWrapper: React.FC = () => {
    return <App name={AppProps.name}
                age={AppProps.age}
                gender={AppProps.gender} />;
}
export default AppWrapper;
