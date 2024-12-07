import React, { useState } from 'react';

const Toggle: React.FC = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);


    const handleToggle = () => setIsToggled(!isToggled);

    return (
        <div>
            <button onClick={handleToggle}>
                {isToggled ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};

export default Toggle;
