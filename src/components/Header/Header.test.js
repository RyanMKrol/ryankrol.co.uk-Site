import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('renders header correctly', () => {
  const header = shallow(<Header.WrappedComponent location={{}} />);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders header without throwing', () => {
  expect(() => mount(
      <Router>
        <Header />
      </Router>,
  )).not.toThrow();
});
