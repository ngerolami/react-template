import React from 'react';
import './styles.css';

/**
 * Preloader component
 *
 * This component renders a preloader UI while the application is loading data or performing
 * an asynchronous operation. It displays a spinner and an optional message to indicate the
 * loading state.
 *
 * Props:
 * - message (string): An optional message to display alongside the spinner.
 */
const Preloader = ({ message }) => {
  return (
    <div className="preloader-overlay">
      <div className="preloader-container">
        <div className="spinner"></div>
        {message && <p className="preloader-message">{message}</p>}
      </div>
    </div>
  );
};

export default Preloader;