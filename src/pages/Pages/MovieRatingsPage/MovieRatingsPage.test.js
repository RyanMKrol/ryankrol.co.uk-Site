import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MovieRatingsPage from './MovieRatingsPage';

it('renders MovieRatingsPage correctly', () => {
  const header = shallow(<MovieRatingsPage />);
  expect(toJson(header)).toMatchSnapshot();
});
