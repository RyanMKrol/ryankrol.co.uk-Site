import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  AlbumRatingsPage,
  Playground,
  MusicSubPage,
  RatingsSubPage,
  BooksSubPage,
  MoviesSubPage,
  MovieRatingsPage,
  BooksPage,
  MoviesPage,
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
          <Route path="/ReadingList">
            <BooksPage />
          </Route>
          <Route path="/MoviesList">
            <MoviesPage />
          </Route>
          <Route path="/AlbumRatings">
            <AlbumRatingsPage />
          </Route>
          <Route path="/MovieRatings">
            <MovieRatingsPage />
          </Route>
          <Route path="/">
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
