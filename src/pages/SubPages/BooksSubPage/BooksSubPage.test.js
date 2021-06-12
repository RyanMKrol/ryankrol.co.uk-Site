import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import BooksSubPage from './BooksSubPage';

it('renders BooksSubPage correctly', () => {
  const header = shallow(<BooksSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});