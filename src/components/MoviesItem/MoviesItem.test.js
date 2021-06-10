import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MoviesItem from './MoviesItem';

import DEFAULT_MOCK from './__mocks__/MoviesItemMocks';

it('renders MoviesItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders MoviesItem without throwing', () => {
  expect(() => mount(DEFAULT_MOCK)).not.toThrow();
});

it('MoviesItem throws without name', () => {
  expect(() => mount(<MoviesItem />)).toThrow();
});

it('MoviesItem throws without thumbnail', () => {
  expect(() => mount(<MoviesItem name={'About a Boy'} />)).toThrow();
});

it('MoviesItem throws without runtime', () => {
  expect(() => mount(<MoviesItem name={'About a Boy'} runtime={'101 min'} />)).toThrow();
});

it('MoviesItem throws without releaseDate', () => {
  expect(() => mount(
      <MoviesItem
        name={'About a Boy'}
        thumbnail={
          'https://m.media-amazon.com/images/M/MV5BMTQ2Mzg4MDAzNV5BMl5BanBnXkFtZTgwMjcxNTYxMTE@._V1_SX300.jpg'
        }
        runtime={'101 min'}
      />,
  )).toThrow();
});
