import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AboutMePage from './AboutMePage';

it('renders AboutMePage correctly', () => {
  const header = shallow(<AboutMePage />);
  expect(toJson(header)).toMatchSnapshot();
});
