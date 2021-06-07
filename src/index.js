import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Playground from './pages';
import Header from './components';

import './index.css';

/**
 * Component representing all of the routing for the site
 *
 * @returns {React.Component} JSX for the entire app
 */
function AppRouter() {
  return (
    <div id="root-container">
      <Router>
        <Header />
        <div className="page-container">
          <Switch>
            <Route exact path="/">
              <Redirect
                to={{
                  pathname: '/playground',
                }}
              />
            </Route>
            <Route path="/playground">
              <Playground />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
