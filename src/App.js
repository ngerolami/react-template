
import React, { useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {isLoading && <LoadingIndicator />}
    </div>
  );
};
export default App;