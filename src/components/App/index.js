import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewPage from '../NewPage/NewPage';

const App = () => (
  <Router>
    <div>
      {/* Other routes and components */}
      <Switch>
        <Route path="/new-page">
          <NewPage />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;