import React, { Component } from 'react'
import { BookItem, LoadingIcon } from './../components'
import fetch from "node-fetch"

import './Books.css';

const BOOKS_API_ENDPOINT = "http://www.ryankrol.co.uk/api/books"

class Books extends Component {
  constructor() {
    super()

    this.state = {
      books: undefined
    }

    fetch(BOOKS_API_ENDPOINT).then((response) => {
      return response.json()
    }).then((booksData) => {

      this.setState({
        books: booksData.sort(bookComparator)
      })
    })
  }

  generateBookItems() {
    return this.state.books.map((book) => (
      <BookItem
        key={book.bookId}
        title={book.title}
        authors={book.authors}
        images={book.images}
        isbn={book.isbn}
        bookId={book.bookId}
      />
    ))
  }

  render() {
    const content = (typeof this.state.books !== 'undefined') ?
      this.generateBookItems() :
      <LoadingIcon />

    return (
      <div className="books-page-body">
        <div className="Books">
          {content}
        </div>
      </div>
    );
  }
}

// sort books first by the series they belong to, and by the number in
// that series if two books belong to the same series
function bookComparator(bookA, bookB) {
  if(bookA.series === bookB.series) {
    return bookA.numberInSeries < bookB.numberInSeries ? -1 : 1
  } else {
    return bookA.series > bookB.series ? 1 : -1
  }
}

export default Books;
