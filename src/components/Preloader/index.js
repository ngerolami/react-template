import React from 'react';
import './styles.css';

/**
 * Preloader component
 * Displays a loading animation while content is being fetched or loaded
 */
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;