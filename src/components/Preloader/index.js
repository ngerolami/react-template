import React from 'react';
import './styles.css';

/**
 * Preloader component to display a loading animation.
 * @component
 * @example
 * return (
 *   <Preloader />
 * )
 */
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader__spinner"></div>
    </div>
  );
};

export default Preloader;