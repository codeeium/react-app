import React from "react";

const App: React.FC = () => {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>Hello, React TypeScript!</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default App;

