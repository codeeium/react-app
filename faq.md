The document titled "useState and useEffect Hook" provides an overview of the two React hooks:

### **useState**
- **Purpose:** Manages the state within functional components.
- **Features:**
    - Keeps the UI dynamic and updates it in real-time.
    - Triggers re-renders of components whenever the state changes.
    - Simplifies internal state management.

### **useEffect**
- **Purpose:** Handles side effects in functional components.
- **Features:**
    - Executes tasks outside the rendering phase, like fetching data or setting up subscriptions.
    - Ensures components remain clean and efficient.
    - Can include a cleanup function to prevent memory leaks.
    - Allows control over when the effect should run by using a dependency array.
    - Helps maintain performance with optimized renders.

### Common Benefits:
- **useState:** Offers autonomy to manage component state independently, reducing reliance on external sources.
- **useEffect:** Empowers components to act on state/prop changes while ensuring efficient cleanup and optimized rendering.

Would you like to focus on a specific part or require assistance with React hooks implementation?

import { useState } from "react";

const LightSwitch = () => {
const [isOn, setIsOn] = useState(false);
const toggleLight = () => setIsOn(!isOn);

return (
<div>
<p>Light: {isOn ? 'On' : 'Off'}</p>
<button onClick={toggleLight}>
{isOn ? 'Turn Off' : 'Turn On'}
</button>
</div>
);
};
! ---

import { useState, useEffect } from "react";

const CatFact = () => {
const [fact, setFact] = useState('');

useEffect(() => {
fetch('https://catfact.ninja/fact')
.then(response => response.json())
.then(data => setFact(data.fact));
}, []);

return (
<div>{fact}</div>
);
};


