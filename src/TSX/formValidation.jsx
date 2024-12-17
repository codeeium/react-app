// formValidation.js
export const validateForm = (name, email) => {
    const errors = {};

    // Validate name
    if (!name) {
        errors.name = 'Name is required';
    }


    // Validate email
    if (!email) {
        errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email is invalid';
    }

    return errors;
};
