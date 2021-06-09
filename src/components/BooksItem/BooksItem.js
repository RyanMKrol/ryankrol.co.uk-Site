import React, { Component } from 'react';

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
      <div>
        <img
          className="book-item-image"
          src={this.images.thumbnail}
          alt={`${this.title} - ${this.authors}`}
        />
        <span className="highlighted">Title:</span>
        <span>{this.title}</span>
        <br />
        <span className="highlighted">Authors:</span>
        <span>{this.authors}</span>
        <br />
        <span className="highlighted">Isbn:</span>
        <span>{this.isbn}</span>
        <br />
        <span className="highlighted">Link:</span>
        <span>{this.link}</span>
        <br />
      </div>
    );
  }
}

export default BooksItem;
