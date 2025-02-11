import React from 'react';

/**
 * Preloader component
 * Renders a pre-loader UI to indicate loading state
 */
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="spinner"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Preloader;