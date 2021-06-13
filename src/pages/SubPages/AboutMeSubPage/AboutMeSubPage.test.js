import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import AboutMeSubPage from './AboutMeSubPage';

it('renders AboutMeSubPage correctly', () => {
  const header = shallow(<AboutMeSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});
