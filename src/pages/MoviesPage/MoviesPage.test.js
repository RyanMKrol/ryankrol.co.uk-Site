import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FULL_SIZE_MOCK, LIMITED_SIZE_MOCK } from './__mocks__/MoviesPageMocks';

it('renders MoviesPage correctly with full size', () => {
  const header = shallow(FULL_SIZE_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
it('renders MoviesPage correctly with reduced size', () => {
  const header = shallow(LIMITED_SIZE_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
