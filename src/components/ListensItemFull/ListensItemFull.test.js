import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import ListensItemFull from './ListensItemFull';

import DEFAULT_MOCK from './__mocks__';

it('renders ListensItemFull without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders ListensItemFull without throwing', () => {
  expect(() => mount(DEFAULT_MOCK)).not.toThrow();
});

it('ListensItemFull throws without album link', () => {
  expect(() => mount(<ListensItemFull />)).toThrow();
});

it('ListensItemFull throws without album name', () => {
  expect(() => mount(<ListensItemFull albumLink="test-link" />)).toThrow();
});

it('ListensItemFull throws without thumbnail', () => {
  expect(() => mount(<ListensItemFull albumLink="test-link" albumName="test-name" />)).toThrow();
});

it('ListensItemFull throws without artist', () => {
  expect(() => mount(
      <ListensItemFull thumbnail="test-thumbnail" albumLink="test-link" albumName="test-name" />,
  )).toThrow();
});

it('ListensItemFull throws without playcount', () => {
  expect(() => mount(
      <ListensItemFull
        thumbnail="test-thumbnail"
        playcount={123}
        albumLink="test-link"
        albumName="test-name"
      />,
  )).toThrow();
});
