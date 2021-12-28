import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import VinylCollectionItem from './VinylCollectionItem';

import DEFAULT_MOCK from './__mocks__/VinylCollectionItemMocks';

it('renders VinylCollectionItem without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('VinylCollectionItem throws without artist', () => {
  expect(() => mount(<VinylCollectionItem />)).toThrow();
});

it('VinylCollectionItem throws without date', () => {
  expect(() => mount(<VinylCollectionItem artist="test-artist" />)).toThrow();
});

it('VinylCollectionItem throws without mood', () => {
  expect(() => mount(<VinylCollectionItem artist="test-artist" date="test-date" />)).toThrow();
});

it('VinylCollectionItem throws without title', () => {
  expect(() => mount(<VinylCollectionItem artist="test-artist" date="test-date" mood="test-mood" />)).toThrow();
});

it('VinylCollectionItem throws without thumbnail', () => {
  expect(() => mount(
      <VinylCollectionItem
        artist="test-artist"
        date="test-date"
        mood="test-mood"
        title="test-title"
      />,
  )).toThrow();
});
