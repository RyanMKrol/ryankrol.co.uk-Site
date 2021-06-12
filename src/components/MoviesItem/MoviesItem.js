import React, { Component } from 'react';

import styles from './MoviesItem.module.css';

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
      <div className={styles.container}>
        <img className={styles.thumbnail} src={this.thumbnail} alt={this.name} />
      </div>
    );
  }
}

export default MoviesItem;
