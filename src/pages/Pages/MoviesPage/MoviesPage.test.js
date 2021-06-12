import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MoviesPage from './MoviesPage';

it('renders MoviesPage correctly', () => {
  const header = shallow(<MoviesPage />);
  expect(toJson(header)).toMatchSnapshot();
});
