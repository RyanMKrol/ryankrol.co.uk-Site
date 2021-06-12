import React, { Component } from 'react';

import styles from './BooksItem.module.css';

/**
 * A component representing a books item
 */
class BooksItem extends Component {
  /**
   * @class
   * @param {object} props arguments to class
   */
  constructor(props) {
    super();

    this.title = props.title;
    this.authors = props.authors.join(', ');
    this.images = props.images;
    this.isbn = props.isbn;
    this.link = `https://www.amazon.co.uk/s?k=${this.isbn}`;
    this.series = props.series;
    this.numberInSeries = props.numberInSeries;

    if (
      typeof this.title === 'undefined'
      || typeof this.authors === 'undefined'
      || typeof this.images === 'undefined'
      || typeof this.isbn === 'undefined'
      || typeof this.link === 'undefined'
      || typeof this.series === 'undefined'
      || typeof this.numberInSeries === 'undefined'
    ) {
      throw new Error('Could not create BooksItem');
    }
  }

  /**
   * Render method
   *
   * @returns {React.Component} JSX BooksItem component
   */
  render() {
    return (
      <div className={styles.container}>
        <img
          className={styles.thumbnail}
          src={this.images.thumbnail}
          alt={`${this.title} - ${this.authors}`}
        />
      </div>
    );
  }
}

export default BooksItem;
