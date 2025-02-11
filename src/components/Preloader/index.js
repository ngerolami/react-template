```jsx
import React from 'react';
import './styles.css';

/**
 * PreLoader component
 * Displays a loading spinner or animation while the app is loading.
 */
const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  );
};

export default PreLoader;
```