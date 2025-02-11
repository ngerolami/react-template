import React from 'react';
import { useSelector } from 'react-redux';
import './PreloaderPage.css'; // Import the CSS file for styling

/**
 * PreloaderPage component
 * Renders a pre-loader page with a spinner and optional content
 */
const PreloaderPage = () => {
  // Get the isLoading state from the Redux store
  const isLoading = useSelector((state) => state.preloader.isLoading);

  return (
    <div className="preloader-page">
      {isLoading && (
        <div className="preloader-spinner">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      {/* Render additional content here if needed */}
    </div>
  );
};

export default PreloaderPage;