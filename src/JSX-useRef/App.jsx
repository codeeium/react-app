import React from 'react';
import Input from "./Input.jsx";
import ChangeBackgroundOnFocus from "./ChangeBackgroundOnFocus.jsx";
import TooltipOnFocus from "./TooltipOnFocus.jsx";
import EnableButtonOnFocus from "./EnableButtonOnFocus.jsx";
import FocusCounter from "./FocusCounter.jsx";
import AnimateOnFocus from "./AnimateOnFocus.jsx";
const App = () => {
    return (
        <div>
            <h1>Welcome to the Counter App</h1>
            <Input />
            <ChangeBackgroundOnFocus/>
            <TooltipOnFocus/>
            <EnableButtonOnFocus/>
            <FocusCounter/>
            <AnimateOnFocus/>
        </div>
    );
};

export default App;
