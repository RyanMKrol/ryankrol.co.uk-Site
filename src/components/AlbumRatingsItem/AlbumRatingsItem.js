/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AlbumRatingsItem.css';

/**
 * Class representing a UI component for an album
 */
class AlbumRatingsItem extends Component {
  constructor(props) {
    super();

    this.artist = props.artist;
    this.title = props.title;
    this.date = props.date;
    this.highlights = props.highlights;
    this.mood = props.mood;
    this.rating = props.rating;

    if (!(this.artist && this.title && this.date && this.highlights && this.mood && this.rating)) {
      throw new Error('Did not pass all required args for rendering AlbumRatingsItem');
    }
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="AlbumRatingsItem">
        <p className="album-ratings-item-content">
          <span className="album-ratings-item-key">Artist - </span>
          <span className="album-ratings-item-value">{this.artist}</span>
          <br />
          <span className="album-ratings-item-key">Title - </span>
          <span className="album-ratings-item-value">{this.title}</span>
          <br />
          <span className="album-ratings-item-key">Date - </span>
          <span className="album-ratings-item-value">{this.date}</span>
          <br />
          <span className="album-ratings-item-key">Highlights - </span>
          <span className="album-ratings-item-value">{this.highlights}</span>
          <br />
          <span className="album-ratings-item-key">Mood - </span>
          <span className="album-ratings-item-value">{this.mood}</span>
          <br />
          <span className="album-ratings-item-key">Rating - </span>
          <span className="album-ratings-item-value">{this.rating}</span>
        </p>
      </div>
    );
  }
}

AlbumRatingsItem.propTypes = {
  artist: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  highlights: PropTypes.string,
  mood: PropTypes.string,
  rating: PropTypes.number,
};

export default AlbumRatingsItem;
