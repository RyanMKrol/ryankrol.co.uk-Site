import React, { Component } from 'react';
import fetch from 'node-fetch';

import { MovieItem, LoadingIcon } from '../components';
import { MOVIES_PAGE_DATA } from '../data';
import { apiUtils } from '../utils';

import './Movies.css';

const MOVIES_API_ENDPOINT = `${apiUtils.default()}/movies`;

/**
 * Page to display my movies
 */
class Movies extends Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {
      movies: undefined,
    };

    fetch(MOVIES_API_ENDPOINT)
      .then((response) => response.json())
      .then((movieData) => {
        this.setState({
          movies: movieData,
        });
      });
  }

  /**
   * Generates movie items using movies stored in state
   *
   * @returns {string} HTML for every movie item available to the page
   */
  generateMovieItems() {
    if (typeof this.state.movies === 'undefined') {
      return <LoadingIcon />;
    }

    return this.state.movies.map((movie) => (
      <MovieItem
        key={movie.imdbID}
        movieName={movie.Title}
        movieThumbnail={movie.Poster}
        movieRuntime={movie.Runtime}
        movieReleaseDate={movie.Released}
      />
    ));
  }

  /**
   * Generates the summary line for the movies page
   *
   * @returns {string} HTML for the movies summary line
   */
  generatePageSummary() {
    if (typeof this.state.movies === 'undefined') {
      return null;
    }

    return (
      <div className="movies-page-summary">
        <h3>{MOVIES_PAGE_DATA.summary}</h3>
      </div>
    );
  }

  /**
   * Renders the page
   *
   * @returns {string} HTML for the page
   */
  render() {
    const content = this.generateMovieItems();
    const pageSummary = this.generatePageSummary();

    return (
      <div className="movies-page-body">
        <div className="Movies">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}

export default Movies;
