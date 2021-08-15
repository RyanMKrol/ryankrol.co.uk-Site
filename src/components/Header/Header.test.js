import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { render, screen, fireEvent } from '@testing-library/react';

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

it('highlighted class is applied on hover', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );

  fireEvent.mouseOver(screen.getByText('Books'));

  expect(screen.getByText('Books').className.includes('highlighted')).toBeTruthy();
});

it('highlighted class is removed after hover', () => {
  render(
    <Router>
      <Header />
    </Router>,
  );

  fireEvent.mouseOver(screen.getByText('Books'));
  fireEvent.mouseLeave(screen.getByText('Books'));

  expect(screen.getByText('Books').className.includes('highlighted')).toBeFalsy();
});
