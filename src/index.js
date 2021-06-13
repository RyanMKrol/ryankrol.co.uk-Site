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
import { Header, PageSection, SocialList } from './components';

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
        <div id="root-page-container">
          <div id="root-page-content">
            <Switch>
              <Route path="/ReadingList">
                <PageSection title="Books">
                  <BooksPage />
                </PageSection>
              </Route>
              <Route path="/MoviesList">
                <PageSection title="Movies">
                  <MoviesPage />
                </PageSection>
              </Route>
              <Route path="/AlbumRatings">
                <PageSection title="Ratings">
                  <AlbumRatingsPage />
                </PageSection>
              </Route>
              <Route path="/MovieRatings">
                <PageSection title="Ratings">
                  <MovieRatingsPage />
                </PageSection>
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
            <div id="root-page-footer" />
          </div>
          <div id="root-page-social">
            <SocialList />
          </div>
        </div>
      </Router>
    </div>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
