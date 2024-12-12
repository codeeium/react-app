import React from 'react';
import TimerComponent from './TimerComponent';  // Import the TimerComponent

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>React useEffect Example in TypeScript</h1>
            <TimerComponent />  {/* Use TimerComponent inside the App */}
        </div>
    );
}

export default App;
