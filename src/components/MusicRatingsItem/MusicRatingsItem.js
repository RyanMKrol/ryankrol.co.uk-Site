import React, { Component } from 'react';

/**
 * A component representing all information about a "listens" item
 */
class MusicRatingsItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    this.highlights = props.highlights;
    this.artist = props.artist;
    this.mood = props.mood;
    this.date = props.date;
    this.rating = props.rating;
    this.title = props.title;

    if (
      !this.highlights
      || !this.artist
      || !this.mood
      || !this.date
      || !this.rating
      || !this.title
    ) {
      throw new Error('Could not create MusicRatingsItem');
    }
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX MusicRatingsItem component
   */
  render() {
    return (
      <div>
        <span className="highlighted">Highlights:</span>
        <span>{this.highlights}</span>
        <br />
        <span className="highlighted">Artist:</span>
        <span>{this.artist}</span>
        <br />
        <span className="highlighted">Mood:</span>
        <span>{this.mood}</span>
        <br />
        <span className="highlighted">Date:</span>
        <span>{this.date}</span>
        <br />
        <span className="highlighted">Rating:</span>
        <span>{this.rating}</span>
        <br />
        <span className="highlighted">Title:</span>
        <span>{this.title}</span>
        <br />
      </div>
    );
  }
}

export default MusicRatingsItem;
