import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'

import BookItem from './../BookItem'

const defaultArgs = {
  title: 'test-title',
  authors: ['test-authors'],
  images: 'test-images',
  isbn: 'test-isbn',
  bookId: 'test-bookId',
}

// Render Tests

it('renders BookItem correctly with a single author', () => {
  const bookItem = shallow(
    <BookItem {...defaultArgs} />)
  expect(toJson(bookItem)).toMatchSnapshot()
})

it('renders BookItem correctly with multiple authors', () => {
  const testArgs = Object.assign({}, defaultArgs, {
    authors: ["authorOne", "authorTwo"]
  })
  const bookItem = shallow(
    <BookItem {...testArgs} />)
  expect(toJson(bookItem)).toMatchSnapshot()
})

it('throws when required parameters are omitted', () => {
  expect(() => mount(<BookItem />)).toThrow()
})

it('does not throw when required parameters are provided', () => {
  expect(() => mount(<BookItem {...defaultArgs}/>)).not.toThrow()
})