import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import MusicSubPage from './MusicSubPage';

it('renders playground correctly', () => {
  const header = shallow(<MusicSubPage />);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders playground without throwing', () => {
  expect(() => mount(<MusicSubPage />)).not.toThrow();
});
