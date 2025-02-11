import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions'; // Assuming you have an action creator for fetching data
import PreloaderPage from '../PreloaderPage';

/**
 * App component
 *
 * This is the main component that renders the application.
 *
 * @returns {JSX.Element} The App component
 */
const App = () => {
  const dispatch = useDispatch();
  const isPreloaderVisible = useSelector((state) => state.isPreloaderVisible); // Assuming you have a state for preloader visibility
  const data = useSelector((state) => state.data); // Assuming you have a state for fetched data

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Render the PreloaderPage component if preloader is visible
  if (isPreloaderVisible) {
    return <PreloaderPage message="Loading data..." />;
  }

  // Render the main application content
  return (
    <div>
      {/* Your existing application content */}
      {data && <div>Fetched Data: {data}</div>}
    </div>
  );
};

export default App;