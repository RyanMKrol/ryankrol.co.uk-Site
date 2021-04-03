import React, { Component } from 'react';
import fetch from 'node-fetch';

import { BookItem, LoadingIcon } from '../../components';
import { BOOKS_PAGE_DATA } from '../../data';
import { apiUtils } from '../../utils';

import './Books.css';

const BOOKS_API_ENDPOINT = `${apiUtils.default()}/books`;

/**
 * Object representing the props to an AlbumItem
 *
 * @typedef {object} RawBookJsonData
 * @property {string} bookId BookId
 * @property {string} title Title
 * @property {string} authors Authors
 * @property {string} images Images
 * @property {string} isbn ISBN
 * @property {string} series The series that the book belongs to
 * @property {number} numberInSeries The number in the series that this book belongs to
 */

/**
 * Page to display my books
 */
class Books extends Component {
  /**
   * constructor
   */
  constructor() {
    super();

    this.state = {
      books: undefined,
    };

    fetch(BOOKS_API_ENDPOINT)
      .then((response) => response.json())
      .then((booksData) => {
        this.setState({
          books: booksData.sort(bookComparator),
        });
      });
  }

  /**
   * Generates book items using books stored in state
   *
   * @returns {string} HTML for every book item available to the page
   */
  generateBookItems() {
    if (typeof this.state.books === 'undefined') {
      return <LoadingIcon />;
    }

    return this.state.books.map((book) => (
      <BookItem
        key={book.bookId}
        title={book.title}
        authors={book.authors}
        images={book.images}
        isbn={book.isbn}
        bookId={book.bookId}
      />
    ));
  }

  /**
   * Generates the summary line for the books page
   *
   * @returns {string} HTML for the books summary line
   */
  generatePageSummary() {
    if (typeof this.state.books === 'undefined') {
      return null;
    }

    return (
      <div className="books-page-summary">
        <h3>{BOOKS_PAGE_DATA.summary}</h3>
      </div>
    );
  }

  /**
   * Renders the page
   *
   * @returns {string} HTML for the page
   */
  render() {
    const content = this.generateBookItems();
    const pageSummary = this.generatePageSummary();

    return (
      <div className="books-page-body">
        <div className="Books">
          {pageSummary}
          {content}
        </div>
      </div>
    );
  }
}

/**
 * Sorts books first by the series they belong to, and by the number in
 * that series if two books belong to the same series
 *
 * @param {RawBookJsonData} bookA First book in comparison
 * @param {RawBookJsonData} bookB Second book in comparison
 * @returns {boolean} Whether bookA should come before bookB
 */
function bookComparator(bookA, bookB) {
  if (bookA.series === bookB.series) {
    return bookA.numberInSeries < bookB.numberInSeries ? -1 : 1;
  }
  return bookA.series > bookB.series ? 1 : -1;
}

export default Books;
