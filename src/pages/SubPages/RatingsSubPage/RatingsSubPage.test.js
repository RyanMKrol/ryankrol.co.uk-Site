import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  FULL_SIZE_ALBUMS_MOCK,
  LIMITED_SIZE_ALBUMS_MOCK,
  FULL_SIZE_MOVIES_MOCK,
  LIMITED_SIZE_MOVIES_MOCK,
} from './__mocks__/RatingsSubPageMocks';

it('renders RatingsSubPage correctly with full size album ratings', () => {
  const header = shallow(FULL_SIZE_ALBUMS_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsSubPage correctly with limited size album ratings', () => {
  const header = shallow(LIMITED_SIZE_ALBUMS_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsSubPage correctly with full size movie ratings', () => {
  const header = shallow(FULL_SIZE_MOVIES_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsSubPage correctly with limited size movie ratings', () => {
  const header = shallow(LIMITED_SIZE_MOVIES_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
