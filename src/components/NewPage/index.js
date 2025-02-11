```jsx
import React from 'react';
import PreLoader from '../PreLoader';
import './styles.css';

/**
 * A NewPage component that displays a new page with a pre-loader.
 * This component can be used to show a new page with a loading indicator until the content is ready.
 */
const NewPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // Simulate content loading after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="new-page-container">
      {isLoading ? (
        <PreLoader />
      ) : (
        <div className="new-page-content">
          <h1>Welcome to the New Page</h1>
          <p>This is the content of the new page.</p>
        </div>
      )}
    </div>
  );
};

export default NewPage;
```