import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieRatingsInputPage from './MovieRatingsInputPage';

it('renders MovieRatingsInputPage correctly', () => {
  const header = shallow(<MovieRatingsInputPage />);
  expect(toJson(header)).toMatchSnapshot();
});
