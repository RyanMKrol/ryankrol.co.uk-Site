import React, { Component } from 'react'
import fetch from 'node-fetch'

import { BookItem, LoadingIcon } from './../components'
import { BOOKS_PAGE_DATA } from './../data/BooksPageData'
import { apiUtils } from './../utils'

import './Books.css'

const BOOKS_API_ENDPOINT = `${apiUtils.default()}/books`

class Books extends Component {
  constructor() {
    super()

    this.state = {
      books: undefined,
    }

    fetch(BOOKS_API_ENDPOINT)
      .then((response) => {
        return response.json()
      })
      .then((booksData) => {
        this.setState({
          books: booksData.sort(bookComparator),
        })
      })
  }

  generateBookItems() {
    if (typeof this.state.books === 'undefined') {
      return <LoadingIcon />
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
    ))
  }

  generatePageSummary() {
    if (typeof this.state.books === 'undefined') {
      return null
    }

    return (
      <div className="books-page-summary">
        <h3>{BOOKS_PAGE_DATA.summary}</h3>
      </div>
    )
  }

  render() {
    const content = this.generateBookItems()
    const pageSummary = this.generatePageSummary()

    return (
      <div className="books-page-body">
        <div className="Books">
          {pageSummary}
          {content}
        </div>
      </div>
    )
  }
}

// sort books first by the series they belong to, and by the number in
// that series if two books belong to the same series
function bookComparator(bookA, bookB) {
  if (bookA.series === bookB.series) {
    return bookA.numberInSeries < bookB.numberInSeries ? -1 : 1
  } else {
    return bookA.series > bookB.series ? 1 : -1
  }
}

export default Books
