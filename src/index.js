import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  AboutMePage,
  MusicPage,
  RatingsPage,
  BooksPage,
  MoviesPage,
  MovieRatingsInputPage,
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
              <Route path="/NewRatings/Movie">
                <PageSection title="Ratings">
                  <MovieRatingsInputPage />
                </PageSection>
              </Route>
              <Route path="/ReadingList">
                <PageSection title="Books">
                  <BooksPage fullSize={true} />
                </PageSection>
              </Route>
              <Route path="/MoviesList">
                <PageSection title="Movies">
                  <MoviesPage fullSize={true} />
                </PageSection>
              </Route>
              <Route path="/AlbumRatings">
                <PageSection key="albumRatings" title="Ratings">
                  <RatingsPage
                    showMovieRatings={false}
                    showAlbumRatings={true}
                    fullMovieRatings={false}
                    fullAlbumRatings={true}
                  />
                </PageSection>
              </Route>
              <Route path="/MovieRatings">
                <PageSection key="movieRatings" title="Ratings">
                  <RatingsPage
                    showMovieRatings={true}
                    showAlbumRatings={false}
                    fullMovieRatings={true}
                    fullAlbumRatings={false}
                  />
                </PageSection>
              </Route>
              <Route path="/">
                <PageSection>
                  <AboutMePage />
                </PageSection>
                <PageSection title="Music">
                  <MusicPage />
                </PageSection>
                <PageSection title="Ratings">
                  <RatingsPage
                    showMovieRatings={true}
                    showAlbumRatings={true}
                    fullMovieRatings={false}
                    fullAlbumRatings={false}
                  />
                </PageSection>
                <PageSection title="Books">
                  <BooksPage fullSize={false} />
                </PageSection>
                <PageSection title="Movies">
                  <MoviesPage fullSize={false} />
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
