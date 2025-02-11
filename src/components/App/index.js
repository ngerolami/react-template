import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Preloader from '../Preloader';
import NewPage from '../NewPage';

/**
 * App component
 *
 * This is the root component of the application. It sets up the routing
 * and conditionally renders the Preloader component based on the application's
 * loading state.
 */
const App = () => {
  const { isLoading, message } = useSelector((state) => state.preloader);

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* Add a navigation link to the new page */}
              <Link to="/new-page">New Page</Link>
            </li>
          </ul>
        </nav>

        {/* Render the Preloader if the application is loading */}
        {isLoading && <Preloader message={message} />}

        <Switch>
          {/* Add a route for the new page */}
          <Route path="/new-page">
            <NewPage />
          </Route>

          {/* Add other routes as needed */}
          <Route path="/">
            {/* Render the main content here */}
            <div>Home Page</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;