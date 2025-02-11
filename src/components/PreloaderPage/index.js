import React from 'react';
import { useSelector } from 'react-redux';

/**
 * PreloaderPage component
 *
 * This component renders a pre-loader page with a spinner or loading indicator.
 * It checks the preloader state from the Redux store to determine if the pre-loader should be displayed.
 */
const PreloaderPage = () => {
  // Get the preloader state from the Redux store
  const showPreloader = useSelector((state) => state.preloader.show);

  return (
    <div className="preloader-page">
      {showPreloader && (
        <div className="preloader-container">
          <div className="preloader-spinner"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default PreloaderPage;