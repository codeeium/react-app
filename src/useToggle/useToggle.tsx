import { useState } from "react";

function useToggle(defaultValue: boolean = false):
    [boolean, (newValue?: boolean) => void] {
    const [value, setValue] = useState(defaultValue);

    function toggleValue(newValue?: boolean): void {
        setValue(currentValue => (typeof newValue === "boolean" ? newValue : !currentValue));
    }

    return [value, toggleValue];
}

export default useToggle;
