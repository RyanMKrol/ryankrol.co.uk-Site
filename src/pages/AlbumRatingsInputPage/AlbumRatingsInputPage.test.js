import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumRatingsInputPage from './AlbumRatingsInputPage';

it('renders AlbumRatingsInputPage correctly', () => {
  const header = shallow(<AlbumRatingsInputPage />);
  expect(toJson(header)).toMatchSnapshot();
});
