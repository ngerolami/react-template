```jsx
import React from 'react';

/**
 * PreLoader component
 *
 * This component renders a pre-loader animation while the application
 * is loading or fetching data.
 *
 * Props:
 *   isLoading (boolean): Indicates whether the pre-loader should be shown or not.
 */
const PreLoader = ({ isLoading }) => {
  if (!isLoading) {
    return null; // Don't render anything if not loading
  }

  return (
    <div className="preloader-container">
      <div className="preloader-spinner">
        {/* Render your pre-loader animation or spinner here */}
      </div>
      <div className="preloader-text">Loading...</div>
    </div>
  );
};

export default PreLoader;
```