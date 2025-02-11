import React from 'react';

/**
 * PreloaderPage component
 * Displays a pre-loader animation while data is being loaded or other operations are in progress
 */
const PreloaderPage = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-animation">
        {/* Add your pre-loader animation styles and content here */}
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default PreloaderPage;