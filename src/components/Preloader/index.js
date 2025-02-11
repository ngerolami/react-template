```jsx
import React from 'react';
import './styles.css'; // Assuming you have a separate styles.css file

/**
 * PreLoader component
 * Displays a loading spinner or animation while the page is loading.
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