import React from 'react';
import './styles.css'; // Assuming you have a separate CSS file for styles

/**
 * PreLoader component
 * Renders a pre-loader UI element
 */
const PreLoader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-spinner"></div>
      <div className="preloader-text">Loading...</div>
    </div>
  );
};

export default PreLoader;