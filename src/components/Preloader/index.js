```jsx
import React from 'react';
import './styles.css';

/**
 * A PreLoader component that displays a loading spinner.
 * This component can be used to show a loading indicator while content is being fetched or loaded.
 */
const PreLoader = () => {
  return (
    <div className="preloader-container">
      <div className="preloader-spinner"></div>
    </div>
  );
};

export default PreLoader;
```