import React from 'react';
import { connect } from 'react-redux';
import PreloaderPage from '../PreloaderPage';

// Import other components and dependencies

const App = ({ isLoading }) => {
  return (
    <div className="app">
      {isLoading && <PreloaderPage />}
      {/* Render other components and content */}
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  isLoading: state.preloader.isLoading,
});

// Connect the component to Redux store
export default connect(mapStateToProps)(App);