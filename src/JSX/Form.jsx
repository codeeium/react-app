// Form.js
import React, { useState } from 'react';
import FormInput from './FormInput';
import { validateForm } from './formValidation';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({ name: '', email: '' });

        // Form validation
        const newErrors = validateForm(name, email);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert(`Form submitted successfully! Name: ${name}, Email: ${email}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={errors.name}
            />
            <FormInput
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
