import React from 'react';
import { connect } from 'react-redux';

// Import any necessary actions or selectors from the preloader reducer

// Preloader component
const Preloader = ({ isLoading }) => {
  return (
    <div className="preloader-container">
      {isLoading && (
        <div className="preloader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

// Map Redux state to component props
const mapStateToProps = (state) => ({
  isLoading: state.preloader.isLoading, // Assuming isLoading is the state property for the preloader
});

// Connect the component to Redux store
const PreloaderPage = connect(mapStateToProps)(Preloader);

export default PreloaderPage;