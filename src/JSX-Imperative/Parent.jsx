import React, {useRef, useImperativeHandle, forwardRef} from 'react';

// Child Component
const CustomInput =
    forwardRef((_, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focusInput: () => inputRef.current?.focus(),
        clearInput: () => {
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        },
    }));

    return (
        <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
        />
    );
});

// Parent Component
const ParentComponent = () => {
    const inputRef = useRef(null);

    const handleFocus = () => inputRef.current?.focusInput();
    const handleClear = () => inputRef.current?.clearInput();

    return (
        <div>
            <CustomInput ref={inputRef}/>
            <button onClick={handleFocus}>
                Focus Input
            </button>
            <button onClick={handleClear}>
                Clear Input
            </button>
        </div>
    );
};

export default ParentComponent;
