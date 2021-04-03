import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Portfolio from './Portfolio';

// Render Tests

it('renders Portfolio only when rendered', () => {
  const portfolio = shallow(<Portfolio />);
  expect(toJson(portfolio)).toMatchSnapshot();
});

it('does not crash when rendered', () => {
  expect(() => mount(<Portfolio />)).not.toThrow();
});
