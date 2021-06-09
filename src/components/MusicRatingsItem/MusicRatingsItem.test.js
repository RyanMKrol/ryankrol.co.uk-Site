import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MusicRatingsItem from './MusicRatingsItem';

import DEFAULT_MOCK from './__mocks__/MusicRatingsItemMocks';

it('renders MusicRatingsItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders MusicRatingsItem without throwing', () => {
  expect(() => mount(DEFAULT_MOCK)).not.toThrow();
});

it('MusicRatingsItem throws without highlights', () => {
  expect(() => mount(<MusicRatingsItem />)).toThrow();
});
it('MusicRatingsItem throws without artist', () => {
  expect(() => mount(<MusicRatingsItem highlights={'test-highlights'} />)).toThrow();
});
it('MusicRatingsItem throws without mood', () => {
  expect(() => mount(<MusicRatingsItem highlights={'test-highlights'} artist={'test-artist'} />)).toThrow();
});
it('MusicRatingsItem throws without date', () => {
  expect(() => mount(
      <MusicRatingsItem highlights={'test-highlights'} artist={'test-artist'} mood={'test-mood'} />,
  )).toThrow();
});
it('MusicRatingsItem throws without rating', () => {
  expect(() => mount(
      <MusicRatingsItem
        highlights={'test-highlights'}
        artist={'test-artist'}
        mood={'test-mood'}
        date={'test-data'}
      />,
  )).toThrow();
});
it('MusicRatingsItem throws without title', () => {
  expect(() => mount(
      <MusicRatingsItem
        highlights={'test-highlights'}
        artist={'test-artist'}
        mood={'test-mood'}
        date={'test-data'}
        title={'test-title'}
      />,
  )).toThrow();
});
