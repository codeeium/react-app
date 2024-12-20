import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFormData } from './actions';

const UIForm = () => {
    const { name, email } = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(updateFormData(e.target.name, e.target.value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Form submitted with Name: ${name} and Email: ${email}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UIForm;
