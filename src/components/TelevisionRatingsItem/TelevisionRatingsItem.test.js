import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import TelevisionRatingsItem from './TelevisionRatingsItem';

import DEFAULT_MOCK from './__mocks__/TelevisionRatingsItemMocks';

it('renders TelevisionRatingsItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('TelevisionRatingsItem throws without highlights', () => {
  expect(() => mount(<TelevisionRatingsItem />)).toThrow();
});

it('TelevisionRatingsItem throws without date', () => {
  expect(() => mount(<TelevisionRatingsItem />)).toThrow();
});

it('TelevisionRatingsItem throws without sound', () => {
  expect(() => mount(<TelevisionRatingsItem date="test-date" />)).toThrow();
});

it('TelevisionRatingsItem throws without blind', () => {
  expect(() => mount(<TelevisionRatingsItem date="test-date" sound={1} />)).toThrow();
});

it('TelevisionRatingsItem throws without craftsmanship', () => {
  expect(() => mount(<TelevisionRatingsItem date="test-date" sound={1} blind={1} />)).toThrow();
});

it('TelevisionRatingsItem throws without gist', () => {
  expect(() => mount(<TelevisionRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} />)).toThrow();
});

it('TelevisionRatingsItem throws without characters', () => {
  expect(() => mount(<TelevisionRatingsItem date="test-date" sound={1} blind={1} craftsmanship={1} gist={1} />)).toThrow();
});

it('TelevisionRatingsItem throws without story', () => {
  expect(() => mount(
      <TelevisionRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
      />,
  )).toThrow();
});

it('TelevisionRatingsItem throws without title', () => {
  expect(() => mount(
      <TelevisionRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
        story={1}
      />,
  )).toThrow();
});

it('TelevisionRatingsItem throws without thumbnail', () => {
  expect(() => mount(
      <TelevisionRatingsItem
        date="test-date"
        sound={1}
        blind={1}
        craftsmanship={1}
        gist={1}
        characters={1}
        story={1}
        title={'test-title'}
      />,
  )).toThrow();
});
