import React, { Suspense, lazy, useState } from 'react';

// Lazy load the component
const LazyComponent = lazy(() => import('./LazyComponent'));

export default function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };

  return (
    <div>
      <h1>React Code-Splitting Example</h1>
      <button onClick={handleClick}>Load Component</button>

      {/* Load component only when button is clicked */}
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
