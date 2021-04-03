import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieItem from './MovieItem';

const defaultArgs = {
  movieName: 'test-movieName',
  movieThumbnail: 'test-movieThumbnail',
  movieRuntime: 'test-movieRuntime',
  movieReleaseDate: 'test-movieReleaseDate',
};

// Render Tests

it('renders MovieItem correctly', () => {
  const movieItem = shallow(<MovieItem {...defaultArgs} />);
  expect(toJson(movieItem)).toMatchSnapshot();
});

it('throws when required parameters are omitted', () => {
  expect(() => mount(<MovieItem />)).toThrow();
});

it('does not throw when required parameters are provided', () => {
  expect(() => mount(<MovieItem {...defaultArgs} />)).not.toThrow();
});
