import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MusicSubPage from './MusicSubPage';

it('renders MusicSubPage correctly', () => {
  const header = shallow(<MusicSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});
