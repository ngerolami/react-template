import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Preloader from '../Preloader';

/**
 * NewPage component
 * Renders a new page with a pre-loader
 * @param {boolean} isLoading - Flag indicating if content is still loading
 */
const NewPage = ({ isLoading }) => {
  // Simulate content loading after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Update Redux state to indicate content is loaded
      // This should be handled by a Redux action creator
      console.log('Content loaded');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading && <Preloader />}
      <h1>New Page</h1>
      <p>This is the content of the new page.</p>
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  isLoading: state.preloader.isLoading,
});

export default connect(mapStateToProps)(NewPage);