import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import BooksPage from './BooksPage';

it('renders BooksPage correctly', () => {
  const header = shallow(<BooksPage />);
  expect(toJson(header)).toMatchSnapshot();
});
