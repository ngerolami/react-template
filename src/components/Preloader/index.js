import React from 'react';
import './styles.css';

/**
 * Preloader component
 * Displays a loading animation while content is being loaded
 */
const Preloader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader"></div>
    </div>
  );
};

export default Preloader;