import React from 'react';

interface CheckboxProps {
    checked: boolean;
    onChange: (isChecked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label>
            <input type="checkbox" checked={checked} onChange={handleChange} />
            {' '}
            Accept Terms and Conditions
        </label>
    );
};

export default Checkbox;
