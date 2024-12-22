import React, { useId } from 'react';

const Form = () => {
    // Using useId to generate unique IDs
    const id = useId();

    return (
        <form>
            <div>
                <label htmlFor={`${id}-name`}>Name :</label>
                <input id={`${id}-name`} type="text" />
            </div>

            <div>
                <label htmlFor={`${id}-email`}>Email  :</label>
                <input id={`${id}-email`} type="email" />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
};

export default Form;
