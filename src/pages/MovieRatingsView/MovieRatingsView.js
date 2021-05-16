import React, { Component } from 'react';
import fetch from 'node-fetch';

import { MovieRatingsItem, LoadingIcon } from '../../components';
import { MOVIE_RATINGS_VIEW_PAGE_DATA } from '../../data';

import { apiUtils } from '../../utils';

import './MovieRatingsView.css';

const MOVIE_RATINGS_API_ENDPOINT = `${apiUtils.default()}/ratings/movie`;

/**
 * Page to display my album reviews
 */
class MovieRatingsView extends Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {
      ratings: undefined,
    };

    fetch(MOVIE_RATINGS_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ratings: data,
        });
      });
  }

  /**
   * Generates movie items using movies stored in state
   *
   * @returns {string} HTML for every movie item available to the page
   */
  generateMovieRatingsItems() {
    if (typeof this.state.ratings === 'undefined') {
      return <LoadingIcon />;
    }

    return this.state.ratings.map((movieRating) => (
      <MovieRatingsItem
        title={movieRating.title}
        blind={movieRating.blind}
        characters={movieRating.characters}
        craftsmanship={movieRating.craftsmanship}
        gist={movieRating.gist}
        sound={movieRating.sound}
        story={movieRating.story}
        date={movieRating.date}
      />
    ));
  }

  /**
   * Generates the summary line for the movies page
   *
   * @returns {string} HTML for the movies summary line
   */
  generatePageSummary() {
    if (typeof this.state.ratings === 'undefined') {
      return null;
    }

    return (
      <div className="movie-ratings-view-page-summary">
        <h3>{MOVIE_RATINGS_VIEW_PAGE_DATA.summary}</h3>
      </div>
    );
  }

  /**
   * Renders the page
   *
   * @returns {string} HTML for the page
   */
  render() {
    const content = this.generateMovieRatingsItems();
    const pageSummary = this.generatePageSummary();

    return (
      <div className="movie-ratings-view-page-body">
        <div className="MovieRatingsView">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}

export default MovieRatingsView;
