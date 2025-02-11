import React from 'react';
import './style.css';

/**
 * Preloader component
 * Displays a loading spinner or animation while waiting for content to load
 */
const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-spinner"></div>
    </div>
  );
};

export default Preloader;