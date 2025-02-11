import React from 'react';
import './PreloaderPage.css';

/**
 * PreloaderPage component
 *
 * This component renders a pre-loader page with a spinner and an optional message.
 *
 * @param {Object} props - Component props
 * @param {string} props.message - The message to display along with the pre-loader (optional)
 * @returns {JSX.Element} The PreloaderPage component
 */
const PreloaderPage = ({ message }) => {
  return (
    <div className="preloader-page">
      <div className="preloader-spinner"></div>
      {message && <p className="preloader-message">{message}</p>}
    </div>
  );
};

export default PreloaderPage;