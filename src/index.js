import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import {
  Playground, MusicSubPage, RatingsSubPage, BooksSubPage, MoviesSubPage,
} from './pages';
import { Header, PageSection } from './components';

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
        <Switch>
          <Route exact path="/">
            <Redirect
              to={{
                pathname: '/playground',
              }}
            />
          </Route>
          <Route path="/playground">
            <PageSection>
              <Playground />
            </PageSection>
            <PageSection title="Music">
              <MusicSubPage />
            </PageSection>
            <PageSection title="Ratings">
              <RatingsSubPage />
            </PageSection>
            <PageSection title="Books">
              <BooksSubPage />
            </PageSection>
            <PageSection title="Movies">
              <MoviesSubPage />
            </PageSection>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
