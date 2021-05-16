import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumRatingsItem from './AlbumRatingsItem';

const defaultArgs = {
  artist: 'Gorillaz',
  title: 'Demon Days',
  date: '15-03-21',
  highlights: 'Dirty Harry, Feel Good Inc.',
  mood: 'Upbeat',
  rating: 84,
};

// Render Tests

it('renders AlbumRatingsItem correctly', () => {
  const albumRatingsItem = shallow(<AlbumRatingsItem {...defaultArgs} />);
  expect(toJson(albumRatingsItem)).toMatchSnapshot();
});

it('throws when required parameters are omitted', () => {
  expect(() => mount(<AlbumRatingsItem />)).toThrow();
});

it('does not throw when required parameters are provided', () => {
  expect(() => mount(<AlbumRatingsItem {...defaultArgs} />)).not.toThrow();
});
