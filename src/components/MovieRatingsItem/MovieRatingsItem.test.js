import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieRatingsItem from './MovieRatingsItem';

import DEFAULT_MOCK from './__mocks__/MovieRatingsItemMocks';

it('renders MovieRatingsItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('MovieRatingsItem throws without highlights', () => {
  expect(() => mount(<MovieRatingsItem />)).toThrow();
});

it('MovieRatingsItem throws without date', () => {
  expect(() => mount(<MovieRatingsItem />)).toThrow();
});

it('MovieRatingsItem throws without sound', () => {
  expect(() => mount(<MovieRatingsItem date="test-date" />)).toThrow();
});

it('MovieRatingsItem throws without blind', () => {
  expect(() => mount(<MovieRatingsItem date="test-date" sound={1} />)).toThrow();
});

it('MovieRatingsItem throws without craftsmanship', () => {
  expect(() => mount(<MovieRatingsItem date="test-date" sound={1} blind={1} />)).toThrow();
});

it('MovieRatingsItem throws without gist', () => {
  expect(() => mount(<MovieRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} />)).toThrow();
});

it('MovieRatingsItem throws without characters', () => {
  expect(() => mount(<MovieRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} gist={1} />)).toThrow();
});

it('MovieRatingsItem throws without story', () => {
  expect(() => mount(
      <MovieRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
      />,
  )).toThrow();
});

it('MovieRatingsItem throws without title', () => {
  expect(() => mount(
      <MovieRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
        story={1}
      />,
  )).toThrow();
});

it('MovieRatingsItem throws without thumbnail', () => {
  expect(() => mount(
      <MovieRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
        story={1}
        title={'test-title'}
      />,
  )).toThrow();
});
