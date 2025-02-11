import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../HomePage';
import AboutPage from '../AboutPage';
import PreloaderPage from '../PreloaderPage'; // Import the new PreloaderPage component

/**
 * App component
 * Renders the main application and handles routing
 */
const App = ({ isPreloaderVisible }) => {
  return (
    <Router>
      <div className="app-container">
        {/* Show the PreloaderPage component if isPreloaderVisible is true */}
        {isPreloaderVisible && <PreloaderPage />}

        {/* Keep the existing Switch and Route components */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </Router>
  );
};

// Map the required state from the Redux store to the component props
const mapStateToProps = (state) => ({
  isPreloaderVisible: state.preloader.isPreloaderVisible, // Get the isPreloaderVisible state from the preloader reducer
});

export default connect(mapStateToProps)(App);