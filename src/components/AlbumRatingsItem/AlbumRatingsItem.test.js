import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumRatingsItem from './AlbumRatingsItem';

import DEFAULT_MOCK from './__mocks__/AlbumRatingsItemMocks';

it('renders AlbumRatingsItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('AlbumRatingsItem throws without highlights', () => {
  expect(() => mount(<AlbumRatingsItem />)).toThrow();
});

it('AlbumRatingsItem throws without date', () => {
  expect(() => mount(<AlbumRatingsItem />)).toThrow();
});

it('AlbumRatingsItem throws without sound', () => {
  expect(() => mount(<AlbumRatingsItem date="test-date" />)).toThrow();
});

it('AlbumRatingsItem throws without blind', () => {
  expect(() => mount(<AlbumRatingsItem date="test-date" sound={1} />)).toThrow();
});

it('AlbumRatingsItem throws without craftsmanship', () => {
  expect(() => mount(<AlbumRatingsItem date="test-date" sound={1} blind={1} />)).toThrow();
});

it('AlbumRatingsItem throws without gist', () => {
  expect(() => mount(<AlbumRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} />)).toThrow();
});

it('AlbumRatingsItem throws without characters', () => {
  expect(() => mount(<AlbumRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} gist={1} />)).toThrow();
});

it('AlbumRatingsItem throws without story', () => {
  expect(() => mount(
      <AlbumRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
      />,
  )).toThrow();
});

it('AlbumRatingsItem throws without title', () => {
  expect(() => mount(
      <AlbumRatingsItem
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

it('AlbumRatingsItem throws without thumbnail', () => {
  expect(() => mount(
      <AlbumRatingsItem
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
