
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PreLoaderPage from './PreLoaderPage';
const Routes = () => (
  <Router>
    <Switch>
      <Route path="/preloader" component={PreLoaderPage} />
      {/* Add other routes here */}
    </Switch>
  </Router>
);
export default Routes;