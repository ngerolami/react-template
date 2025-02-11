import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PreLoader from '../PreLoader'; // Import the PreLoader component

// Import existing components and pages
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
// ... (add more imports as needed)

/**
 * Main App component
 * @param {Object} props - Component props
 * @param {boolean} props.isLoading - Flag indicating if the pre-loader should be shown
 */
const App = ({ isLoading }) => {
  return (
    <Router>
      <div>
        {/* Render the PreLoader component based on the isLoading state */}
        {isLoading && <PreLoader />}

        {/* Render the main content */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

/**
 * Maps the Redux state to component props
 * @param {Object} state - The Redux store state
 * @returns {Object} The mapped props
 */
const mapStateToProps = (state) => ({
  isLoading: state.preLoader.isLoading,
});

// Connect the App component to the Redux store
export default connect(mapStateToProps)(App);