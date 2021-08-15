import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import TelevisionRatingsInputPage from './TelevisionRatingsInputPage';

it('renders TelevisionRatingsInputPage correctly', () => {
  const header = shallow(<TelevisionRatingsInputPage />);
  expect(toJson(header)).toMatchSnapshot();
});
