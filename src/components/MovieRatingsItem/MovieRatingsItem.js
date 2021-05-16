import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './MovieRatingsItem.css';

/**
 * Class representing a UI component for an movie
 */
class MovieRatingsItem extends Component {
  /**
   * @param props
   */
  constructor(props) {
    super();

    this.title = props.title;
    this.blind = props.blind;
    this.characters = props.characters;
    this.craftsmanship = props.craftsmanship;
    this.gist = props.gist;
    this.sound = props.sound;
    this.story = props.story;

    if (
      !(
        typeof this.title !== 'undefined'
        && typeof this.blind !== 'undefined'
        && typeof this.characters !== 'undefined'
        && typeof this.craftsmanship !== 'undefined'
        && typeof this.gist !== 'undefined'
        && typeof this.sound !== 'undefined'
        && typeof this.story !== 'undefined'
      )
    ) {
      throw new Error('Did not pass all required args for rendering MovieRatingsItem');
    }
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="MovieRatingsItem">
        <p className="movie-ratings-item-content">
          <span className="movie-ratings-item-key">Title - </span>
          <span className="movie-ratings-item-value">{this.title}</span>
          <br />
          <span className="movie-ratings-item-key">Blind - </span>
          <span className="movie-ratings-item-value">{this.blind}</span>
          <br />
          <span className="movie-ratings-item-key">Characters - </span>
          <span className="movie-ratings-item-value">{this.characters}</span>
          <br />
          <span className="movie-ratings-item-key">Craftsmanship - </span>
          <span className="movie-ratings-item-value">{this.craftsmanship}</span>
          <br />
          <span className="movie-ratings-item-key">Sound - </span>
          <span className="movie-ratings-item-value">{this.sound}</span>
          <br />
          <span className="movie-ratings-item-key">Story - </span>
          <span className="movie-ratings-item-value">{this.story}</span>
          <br />
          <span className="movie-ratings-item-key">Gist - </span>
          <span className="movie-ratings-item-value">{this.gist}</span>
        </p>
      </div>
    );
  }
}

MovieRatingsItem.propTypes = {
  title: PropTypes.string,
  blind: PropTypes.number,
  characters: PropTypes.number,
  craftsmanship: PropTypes.number,
  gist: PropTypes.string,
  sound: PropTypes.number,
  story: PropTypes.number,
};

export default MovieRatingsItem;
