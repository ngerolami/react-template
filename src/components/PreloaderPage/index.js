import React from 'react';

/**
 * PreloaderPage component
 *
 * This component renders a pre-loader page with a spinner or any other loading indicator.
 * It can be used to display a loading screen while the application is fetching data or performing
 * other asynchronous operations.
 */
const PreloaderPage = () => {
  return (
    <div className="preloader-page">
      <div className="preloader-spinner">
        {/* Replace this with your preferred loading spinner or indicator */}
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default PreloaderPage;