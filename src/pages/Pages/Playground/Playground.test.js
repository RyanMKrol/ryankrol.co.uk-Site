import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Playground from './Playground';

it('renders playground correctly', () => {
  const header = shallow(<Playground />);
  expect(toJson(header)).toMatchSnapshot();
});
