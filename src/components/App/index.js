import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showPreloader, hidePreloader } from '../reducers/preloaderPageReducer';
import PreloaderPage from '../PreloaderPage';
import Spinner from '../Spinner'; // Import your spinner component

// Import your other components and logic
import OtherComponent from '../OtherComponent';
import fetchData from '../../utils/fetchData';

/**
 * App component
 *
 * The root component of the application.
 * This component renders the pre-loader page and other components as needed.
 * It also handles the pre-loader state and data fetching logic.
 */
const App = () => {
  const dispatch = useDispatch();
  const { isPreloaderShown } = useSelector((state) => state.preloaderPage);

  // Example data fetching logic
  useEffect(() => {
    const fetchDataAsync = async () => {
      dispatch(showPreloader()); // Show the pre-loader
      try {
        const data = await fetchData(); // Fetch data from an API or service
        // Process the fetched data
        console.log('Fetched data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(hidePreloader()); // Hide the pre-loader
      }
    };

    fetchDataAsync();
  }, [dispatch]);

  return (
    <>
      {isPreloaderShown ? (
        <PreloaderPage spinner={Spinner} message="Loading data..." />
      ) : (
        <>
          {/* Render your other components */}
          <OtherComponent />
        </>
      )}
    </>
  );
};

export default App;