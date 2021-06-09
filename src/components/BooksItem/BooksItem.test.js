import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import BooksItem from './BooksItem';

import DEFAULT_MOCK from './__mocks__/BooksItemMocks';

it('renders BooksItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders BooksItem without throwing', () => {
  expect(() => mount(DEFAULT_MOCK)).not.toThrow();
});

it('BooksItem throws without title', () => {
  expect(() => mount(<BooksItem />)).toThrow();
});

it('BooksItem throws without authors', () => {
  expect(() => mount(<BooksItem title="The Humans" />)).toThrow();
});

it('BooksItem throws without images', () => {
  expect(() => mount(<BooksItem authors={['Matt Haig']} title="The Humans" />)).toThrow();
});

it('BooksItem throws without isbn', () => {
  expect(() => mount(
      <BooksItem
        authors={['Matt Haig']}
        images={{
          thumbnail:
            'http://books.google.com/books/content?id=4mZ1XoSpR9UC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        }}
        title="The Humans"
      />,
  )).toThrow();
});

it('BooksItem throws without series', () => {
  expect(() => mount(
      <BooksItem
        authors={['Matt Haig']}
        images={{
          thumbnail:
            'http://books.google.com/books/content?id=4mZ1XoSpR9UC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        }}
        isbn={'9780857868770'}
        title="The Humans"
      />,
  )).toThrow();
});

it('BooksItem throws without numberInSeries', () => {
  expect(() => mount(
      <BooksItem
        authors={['Matt Haig']}
        images={{
          thumbnail:
            'http://books.google.com/books/content?id=4mZ1XoSpR9UC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        }}
        isbn={'9780857868770'}
        series={'The Humans'}
        title="The Humans"
      />,
  )).toThrow();
});
