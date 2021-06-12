import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import RatingsSubPage from './RatingsSubPage';

it('renders playground correctly', () => {
  const header = shallow(<RatingsSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});
