import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieRatingsItem from './MovieRatingsItem';

const defaultArgs = {
  title: '300',
  blind: 86,
  characters: 81,
  craftsmanship: 83,
  gist: '300 Spartans dunk on a Persian weirdo',
  sound: 81,
  story: 89,
  date: '07-04-2021',
};

// Render Tests

it('renders MovieRatingsItem correctly', () => {
  const movieRatingsItem = shallow(<MovieRatingsItem {...defaultArgs} />);
  expect(toJson(movieRatingsItem)).toMatchSnapshot();
});

it('throws when required parameters are omitted', () => {
  expect(() => mount(<MovieRatingsItem />)).toThrow();
});

it('does not throw when required parameters are provided', () => {
  expect(() => mount(<MovieRatingsItem {...defaultArgs} />)).not.toThrow();
});
