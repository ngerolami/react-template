
import React from 'react';
import './LoadingIndicator.css';
const LoadingIndicator = () => {
  return (
    <div className="loading-indicator">
      <div className="spinner" />
      <span>Loading...</span>
    </div>
  );
};
export default LoadingIndicator;