import React, { useContext } from 'react';
import { ThemeContext } from '../context';
import User from './User';

const Users = () => {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return <div>No theme context available.</div>;
    }

    const textStyle = {
        backgroundColor: themeContext.theme === 'light' ? 'white' : 'black',
        color: themeContext.theme === 'light' ? 'black' : 'white',
    };

    return (
        <div style={textStyle}>
            <h2>Users List</h2>
            <User />
        </div>
    );
};

export default Users;
