
import React, { useState, useEffect } from 'react';
const PreLoaderPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay to show the pre-loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Welcome to the Pre-loader Page</h1>
          <p>This page demonstrates a pre-loader.</p>
        </div>
      )}
    </div>
  );
};
export default PreLoaderPage;