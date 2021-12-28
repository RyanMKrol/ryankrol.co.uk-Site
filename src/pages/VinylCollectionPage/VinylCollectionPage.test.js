import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VinylCollectionPage from './VinylCollectionPage';

it('renders VinylCollectionPage correctly', () => {
  const header = shallow(<VinylCollectionPage />);
  expect(toJson(header)).toMatchSnapshot();
});
