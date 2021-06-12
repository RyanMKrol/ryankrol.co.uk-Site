import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import AlbumRatingsPage from './AlbumRatingsPage';

it('renders AlbumRatingsPage correctly', () => {
  const header = shallow(<AlbumRatingsPage />);
  expect(toJson(header)).toMatchSnapshot();
});
