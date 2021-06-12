import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import RatingsGraph from './RatingsGraph';

import DEFAULT_MOCK from './__mocks__/RatingsGraphMocks';

// mocking Math random to ensure colours are constant in snapshot
const mockMath = Object.create(global.Math);
mockMath.random = () => 0.5;
global.Math = mockMath;

it('renders RatingsGraph without issue', () => {
  const listensItem = shallow(DEFAULT_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('RatingsGraph throws without data', () => {
  expect(() => mount(<RatingsGraph />)).toThrow();
});

it('RatingsGraph throws without labels', () => {
  expect(() => mount(<RatingsGraph data={{}} />)).toThrow();
});
