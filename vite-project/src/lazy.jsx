import React, { useState, Suspense } from 'react';

// Lazy load the components
const FirstComponent =
    React.lazy(() => import('./FirstComponent.jsx'));
const SecondComponent =
    React.lazy(() => import('./SecondComponent'));

const Lazy = () => {
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);

    return (
        <div>
            <h1>React Lazy Loading on Button Click</h1>
            <div>

                <button onClick={() => setShowFirst(!showFirst)}>
                    {showFirst ? 'Hide First Component' : 'Load First Component'}
                </button>

                <button onClick={() => setShowSecond(!showSecond)}>
                    {showSecond ? 'Hide Second Component' : 'Load Second Component'}
                </button>

            </div>

            {/* Suspense for First Component */}
            {showFirst && (
                <Suspense fallback={<div>Loading First Component...</div>}>
                    <FirstComponent />
                </Suspense>
            )}

            {/* Suspense for Second Component */}
            {showSecond && (
                <Suspense fallback={<div>Loading Second Component...</div>}>
                    <SecondComponent />
                </Suspense>
            )}
        </div>
    );
};

export default Lazy;

