import React, { useState } from 'react';
import Checkbox from './Checkbox';

const App: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false);

    const handleCheckboxChange = (isChecked: boolean) => {
        setChecked(isChecked);
    };

    return (
        <div>
            <h1>React TypeScript Checkbox Example</h1>
            <Checkbox checked={checked} onChange={handleCheckboxChange} />
            <p>Checkbox is {checked ? 'checked' : 'unchecked'}</p>
        </div>
    );
};

export default App;
