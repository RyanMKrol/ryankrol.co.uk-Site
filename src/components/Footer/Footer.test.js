import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

// Render Tests

it('renders footer only when rendered', () => {
  const footer = shallow(<Footer />);
  expect(toJson(footer)).toMatchSnapshot();
});

it('does not crash when rendered', () => {
  expect(() => mount(<Footer />)).not.toThrow();
});
