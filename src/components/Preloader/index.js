import React from 'react';
import './styles.css';

/**
 * PreLoader component
 *
 * This component displays a loading spinner or visual indicator
 * while the page is loading.
 *
 * @component
 * @example
 * return (
 *   <PreLoader isLoading={true} />
 * )
 */
const PreLoader = ({ isLoading }) => {
  return isLoading ? (
    <div className="preloader">
      <div className="spinner"></div>
    </div>
  ) : null;
};

export default PreLoader;