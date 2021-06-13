import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import SocialList from './SocialList';

it('renders SocialList without issue', () => {
  const listensItem = shallow(<SocialList />);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders SocialList without throwing', () => {
  expect(() => mount(<SocialList />)).not.toThrow();
});
