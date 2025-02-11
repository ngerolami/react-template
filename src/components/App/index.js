import React from 'react';
import { connect } from 'react-redux';
import PreloaderPage from '../PreloaderPage';

/**
 * App component
 *
 * This is the main component of the application.
 * It renders the PreloaderPage component conditionally based on the pre-loader state.
 */
const App = ({ isLoading }) => {
  return (
    <div className="app">
      {isLoading ? (
        <PreloaderPage />
      ) : (
        // Render your other application components here
        <div>
          {/* ... */}
        </div>
      )}
    </div>
  );
};

/**
 * Map the state from the Redux store to the component props
 *
 * @param {Object} state - The current state of the Redux store
 * @returns {Object} The mapped props for the component
 */
const mapStateToProps = (state) => ({
  isLoading: state.preloader.isLoading,
});

// Connect the component to the Redux store
export default connect(mapStateToProps)(App);