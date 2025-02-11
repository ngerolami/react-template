import React from 'react';
import './PreloaderPage.css';

/**
 * PreloaderPage component
 *
 * This component displays a pre-loader animation while content is being loaded or an action is being performed.
 * The pre-loader can be customized by passing in different spinner components or modifying the CSS styles.
 *
 * @param {Object} props - Component props
 * @param {React.Component} props.spinner - The spinner component to be rendered as the pre-loader animation
 * @param {string} props.message - Optional message to display alongside the pre-loader
 * @returns {JSX.Element} The PreloaderPage component
 */
const PreloaderPage = ({ spinner: Spinner, message }) => {
  return (
    <div className="preloader-container">
      <div className="preloader-spinner">
        <Spinner />
      </div>
      {message && <div className="preloader-message">{message}</div>}
    </div>
  );
};

/**
 * Default export
 *
 * Exports the PreloaderPage component as the default export.
 */
export default PreloaderPage;