import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MusicPage from './MusicPage';

it('renders MusicPage correctly', () => {
  const header = shallow(<MusicPage />);
  expect(toJson(header)).toMatchSnapshot();
});
