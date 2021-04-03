import React, { Component } from 'react';

import './BookItem.css';

/**
 * Object representing the images returned for a book
 *
 * @typedef {object} BookItemImages
 * @property {string} thumbnail Image used for the thumbnail of the book
 */

/**
 * Object representing the props to an AlbumItem
 *
 * @typedef {object} BookItemProps
 * @property {string} title Title of the book
 * @property {Array<string>} authors Authors of the book
 * @property {BookItemImages} images Images item used the thumbnail
 * @property {string} isbn ISBN for the book
 * @property {string} link Link to buy the book
 */

/**
 * Class representing a UI component for a book
 */
class BookItem extends Component {
  /**
   * @param {BookItemProps} props Arguments to build the widget
   */
  constructor(props) {
    super();

    this.title = props.title;
    this.authors = props.authors.join(', ');
    this.images = props.images;
    this.isbn = props.isbn;
    this.link = `https://www.amazon.co.uk/s?k=${this.isbn}`;

    if (!(this.title && this.authors && this.images && this.isbn)) {
      throw new Error('Did not pass all required args for rendering BookItem');
    }
  }

  /**
   * Render method
   *
   * @returns {string} The JSX representing the component
   */
  render() {
    return (
      <div className="BookItem">
        <div className="book-item-thumbnail">
          <img
            className="book-item-image"
            src={this.images.thumbnail}
            alt={`${this.title} - ${this.authors}`}
          />
        </div>
        <div className="book-information">
          <p className="book-information-content">
            <span className="book-information-key">Title - </span>
            <span className="book-information-value">{this.title}</span>
            <br />
            <span className="book-information-key">
              {this.props.authors.length > 1 ? 'Authors' : 'Author'} -{' '}
            </span>
            <span className="book-information-value">{this.authors}</span>
            <br />
            <span className="book-information-key">ISBN - </span>
            <span className="book-information-value">
              <a href={this.link}>{this.isbn}</a>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default BookItem;
