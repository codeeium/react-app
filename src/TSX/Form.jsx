import React, { useState } from 'react';
import FormInput from './FormInput';
import { validateForm } from './formValidation';


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '' });
    const [emailList, setEmailList] = useState([]); // State to store submitted emails

    const handleSubmit = (e) => {
        e.preventDefault();

        // Reset errors
        setErrors({ name: '', email: '' });

        // Form validation
        const newErrors = validateForm(name, email);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Add the email to the list
            setEmailList((prevEmails) => [...prevEmails, email]);

            // Reset form fields
            setName('');
            setEmail('');
        }
        if (Object.keys(newErrors).length === 0) {
            alert(`Form submitted successfully! Name: ${name}, Email: ${email}`);
        }
    };

    return (
        <div>
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

            {/* Render the list of submitted emails */}
            <div>
                <h3>Submitted Emails:</h3>
                {emailList.length === 0 ? (
                    <p>No emails submitted yet.</p>
                ) : (
                    <ul>
                        {emailList.map((email, index) => (
                            <li key={index}>{email}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Form;
