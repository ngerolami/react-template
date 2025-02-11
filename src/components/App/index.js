import React from 'react';
import { useSelector } from 'react-redux';
import PreloaderPage from '../PreloaderPage'; // Import the PreloaderPage component

// Import other components and modules as needed

/**
 * App component
 * Renders the main application
 */
const App = () => {
  // Get the isLoading state from the Redux store
  const isLoading = useSelector((state) => state.preloader.isLoading);

  return (
    <div className="app">
      {isLoading ? (
        <PreloaderPage /> // Render the PreloaderPage component when isLoading is true
      ) : (
        <>
          {/* Render the rest of the application here */}
          {/* ... */}
        </>
      )}
    </div>
  );
};

export default App;