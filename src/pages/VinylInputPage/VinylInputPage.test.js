import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VinylInputPage from './VinylInputPage';

it('renders VinylInputPage correctly', () => {
  const header = shallow(<VinylInputPage />);
  expect(toJson(header)).toMatchSnapshot();
});
