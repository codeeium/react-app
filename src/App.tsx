import React, { useState } from 'react';

const App: React.FC = () => {
    const [data, setData] = useState<string | null>(null);

    const loadData = () => {
        setData('Loaded Data');
    };

    const clearData = () => {
        setData(null);
    };

    return (
        <div>
            <p>Data: {data ?? 'No Data Available'}</p>
            <button onClick={loadData}>Load Data</button>
            <button onClick={clearData}>Clear Data</button>
        </div>
    );
};

export default App;
