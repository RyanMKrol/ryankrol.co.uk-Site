import React, { Component } from 'react';

/**
 * A component representing a books item
 */
class MoviesItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    this.name = props.Title;
    this.thumbnail = props.Poster;
    this.runtime = props.Runtime;
    this.releaseDate = props.Released;

    if (
      typeof this.name === 'undefined'
      || typeof this.thumbnail === 'undefined'
      || typeof this.runtime === 'undefined'
      || typeof this.releaseDate === 'undefined'
    ) {
      throw new Error('Could not create MoviesItem');
    }
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX MoviesItem component
   */
  render() {
    return (
      <div>
        <img src={this.thumbnail} alt={this.name} />
        <span className="highlighted">Name:</span>
        <span>{this.name}</span>
        <br />
        <span className="highlighted">Runtime:</span>
        <span>{this.runtime}</span>
        <br />
        <span className="highlighted">ReleaseDate:</span>
        <span>{this.releaseDate}</span>
        <br />
      </div>
    );
  }
}

export default MoviesItem;
