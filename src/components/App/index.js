import React from 'react';
import { connect } from 'react-redux';
import PreloaderPage from '../PreloaderPage';

/**
 * App component
 * 
 * This is the main component that renders the application.
 * It conditionally renders the PreloaderPage component based on the application's state.
 */
const App = ({ isPreloaderVisible }) => {
  return (
    <div>
      {isPreloaderVisible && <PreloaderPage />}
      {/* Render other components and routes here */}
    </div>
  );
};

// Map the required state from the Redux store
const mapStateToProps = state => ({
  isPreloaderVisible: state.preloader.isPreloaderVisible
});

export default connect(mapStateToProps)(App);