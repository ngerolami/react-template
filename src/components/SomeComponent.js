
import React, { useState, useEffect } from 'react';
import LoadingIndicator from '../utils/LoadingIndicator';
const SomeComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {isLoading ? (
        <LoadingIndicator />
      ) : data ? (
        // Render component content with data
        <div>{/* ... */}</div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
export default SomeComponent;