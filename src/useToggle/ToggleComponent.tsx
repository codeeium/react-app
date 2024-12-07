import useToggle from "./useToggle";
import React from "react";

function ToggleComponent() {
    const [value, toggleValue] = useToggle(false);

    return (
        <div>
            <div>{value.toString()}</div>
            {/* Wrap toggleValue in a proper function call */}
            <button onClick={() => toggleValue()}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    );
}

export default ToggleComponent;
