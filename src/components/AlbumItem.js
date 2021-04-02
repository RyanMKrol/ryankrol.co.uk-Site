import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './AlbumItem.css';

/**
 * Object representing the props to an AlbumItem
 *
 * @typedef {object} AlbumItemProps
 * @property {string} albumName Name of the album
 * @property {string} thumbnail Thumbnail for the album
 * @property {string} albumLink Link to the album
 * @property {number} playcount Number of plays for the album
 */

/**
 * Class representing a UI component for an album
 */
class AlbumItem extends Component {
  /**
   * @param {AlbumItemProps} props Arguments to build the widget
   */
  constructor(props) {
    super();

    this.artist = props.artist;
    this.albumName = props.albumName;
    this.thumbnail = props.thumbnail;
    this.albumLink = props.albumLink;
    this.playcount = props.playcount;

    if (!(this.artist && this.albumName && this.thumbnail && this.albumLink && this.playcount)) {
      throw new Error('Did not pass all required args for rendering AlbumItem');
    }
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="AlbumItem">
        <div className="album-item-thumbnail">
          <a href={this.albumLink}>
            <img
              className="album-item-image"
              src={this.thumbnail}
              alt={`${this.artist} - ${this.albumName}`}
            />
          </a>
        </div>
        <div className="album-information">
          <p className="album-information-content">
            <span className="album-information-key">Artist - </span>
            <span className="album-information-value">{this.artist}</span>
            <br />
            <span className="album-information-key">Album - </span>
            <span className="album-information-value">{this.albumName}</span>
            <br />
            <span className="album-information-key">Plays - </span>
            <span className="album-information-value">{this.playcount}</span>
          </p>
        </div>
      </div>
    );
  }
}

AlbumItem.propTypes = {
  albumName: PropTypes.string,
  thumbnail: PropTypes.string,
  albumLink: PropTypes.string,
  playcount: PropTypes.number,
};

export default AlbumItem;
