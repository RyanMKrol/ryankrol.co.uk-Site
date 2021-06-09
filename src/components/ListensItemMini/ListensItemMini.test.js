import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListensItemMini from './ListensItemMini';

import DEFAULT_MOCK from './__mocks__/ListensItemMiniMocks';

it('renders ListensItemMini without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders ListensItemMini without throwing', () => {
  expect(() => mount(DEFAULT_MOCK)).not.toThrow();
});

it('ListensItemMini throws without album link', () => {
  expect(() => mount(<ListensItemMini />)).toThrow();
});

it('ListensItemMini throws without album name', () => {
  expect(() => mount(<ListensItemMini albumLink="test-link" />)).toThrow();
});

it('ListensItemMini throws without thumbnail', () => {
  expect(() => mount(<ListensItemMini albumLink="test-link" albumName="test-name" />)).toThrow();
});
