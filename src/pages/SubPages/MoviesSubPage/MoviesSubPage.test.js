import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MoviesSubPage from './MoviesSubPage';

it('renders playground correctly', () => {
  const header = shallow(<MoviesSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});
