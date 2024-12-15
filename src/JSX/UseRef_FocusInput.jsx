import React, { useRef } from 'react';

function UseRef_FocusInput() {
    // Define the ref with the appropriate type for the input element
    const inputRef = useRef<HTMLInputElement | null>(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <p>-------UseRef_FocusInput---------</p>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

export default UseRef_FocusInput;
