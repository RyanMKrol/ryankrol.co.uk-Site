import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

// Render Tests

it('renders header correctly with no currentPage being passed through', () => {
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

// generateHeaderLinks Tests

it('creates the correct current page links with generateHeaderLinks, passing through / as current page', () => {
  const headerLinks = new Header.WrappedComponent({
    location: {
      pathname: '/',
    },
  }).generateHeaderLinks();

  expect(headerLinks).toMatchSnapshot();
});

it('creates the correct current page links with generateHeaderLinks, passing through /about as current page', () => {
  const headerLinks = new Header.WrappedComponent({
    location: {
      pathname: '/about',
    },
  }).generateHeaderLinks();

  expect(headerLinks).toMatchSnapshot();
});

it('creates the correct current page links with generateHeaderLinks, passing through an unsupported destination current page', () => {
  const headerLinks = new Header.WrappedComponent({
    location: {
      pathname: '/unsupported',
    },
  }).generateHeaderLinks();

  expect(headerLinks).toMatchSnapshot();
});
