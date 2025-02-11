import React from 'react';
import './PreloaderPage.css';

/**
 * PreloaderPage component
 * 
 * This component displays a pre-loader animation while the application is loading.
 * It should be rendered conditionally based on the application's state.
 */
const PreloaderPage = () => {
  return (
    <div className="preloader-container">
      <div className="preloader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default PreloaderPage;