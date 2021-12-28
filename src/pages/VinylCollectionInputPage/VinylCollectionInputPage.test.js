import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VinylCollectionInputPage from './VinylCollectionInputPage';

it('renders VinylCollectionInputPage correctly', () => {
  const header = shallow(<VinylCollectionInputPage />);
  expect(toJson(header)).toMatchSnapshot();
});
