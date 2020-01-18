import React, { Component } from 'react'

import './BookItem.css';

class BookItem extends Component {
  constructor(props) {
    super()

    this.title = props.title
    this.authors = props.authors.join(', ')
    this.images = props.images
    this.isbn = props.isbn
    this.bookId = props.bookId

    if (!(this.title && this.authors && this.images && this.isbn)) {
      throw new Error('Did not pass all required args for rendering BookItem')
    }
  }

  render() {
    return (
      <div className="BookItem">
      <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow&display=swap" rel="stylesheet" />
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
            <span className="book-information-value">{this.title}</span><br />
            <span className="book-information-key">Authors - </span>
            <span className="book-information-value">{this.authors}</span><br />
            <span className="book-information-key">ISBN - </span>
            <span className="book-information-value">{this.isbn}</span>
          </p>
        </div>
      </div>
    )
  }
}

export default BookItem
