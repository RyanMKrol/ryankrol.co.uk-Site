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
        books: booksData
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


export default Books;
