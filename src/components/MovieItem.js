import React, { Component } from 'react';

import './MovieItem.css';

/**
 * Object representing the props to a MovieItem
 *
 * @typedef {object} AlbumItemProps
 * @property {string} movieName Name of the movie
 * @property {string} movieThumbnail Thumbnail for the movie
 * @property {string} movieRuntime Runtime of the movie
 * @property {string} movieReleaseDate Release date for the movie
 */

/**
 * Class representing a UI component for a movie
 */
class MovieItem extends Component {
  /**
   * @param {AlbumItemProps} props Arguments to build the widget
   */
  constructor(props) {
    super();

    this.movieName = props.movieName;
    this.movieThumbnail = props.movieThumbnail;
    this.movieRuntime = props.movieRuntime;
    this.movieReleaseDate = props.movieReleaseDate;

    if (!(this.movieName && this.movieThumbnail && this.movieRuntime && this.movieReleaseDate)) {
      throw new Error('Did not pass all required args for rendering movieItem');
    }
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="MovieItem">
        <div className="movie-item-thumbnail">
          <img className="movie-item-image" src={this.movieThumbnail} alt={this.movieName} />
        </div>
        <div className="movie-information">
          <p className="movie-information-content">
            <span className="movie-information-key">Title - </span>
            <span className="movie-information-value">{this.movieName}</span>
            <br />
            <span className="movie-information-key">Runtime - </span>
            <span className="movie-information-value">{this.movieRuntime}</span>
            <br />
            <span className="movie-information-key">Release Date - </span>
            <span className="movie-information-value">{this.movieReleaseDate}</span>
            <br />
          </p>
        </div>
      </div>
    );
  }
}

export default MovieItem;
