import React from 'react';
import fetch from 'node-fetch';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import flushPromises from '../../utils/TestUtils';
import ListensCollection from './ListensCollection';
import {
  FULL_OUTPUT_MOCK,
  REDUCED_OUTPUT_MOCK,
  EXAMPLE_LISTENS_MOCK_ONE,
  EXAMPLE_LISTENS_MOCK_TWO,
} from './__mocks__';

jest.mock('node-fetch');

beforeEach(() => {
  // as this has been mocked once, i need to always be supplying a value, or the shallow fails
  fetch.mockResolvedValueOnce({
    json: () => [EXAMPLE_LISTENS_MOCK_ONE],
  });
});

it('renders ListensCollection with reduced output', async () => {
  const listensCollection = shallow(REDUCED_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(listensCollection)).toMatchSnapshot();
});

it('renders ListensCollection with full output', async () => {
  const listensCollection = shallow(FULL_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(listensCollection)).toMatchSnapshot();
});

it('renders ListensCollection with reduced output, with multiple values', async () => {
  fetch.mockResolvedValueOnce({
    json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO],
  });
  const listensCollection = shallow(REDUCED_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(listensCollection)).toMatchSnapshot();
});

it('renders ListensCollection with full output, with multiple values', async () => {
  fetch.mockResolvedValueOnce({
    json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO],
  });
  const listensCollection = shallow(FULL_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(listensCollection)).toMatchSnapshot();
});

it('ListensCollection does not throw with reduced output', async () => {
  expect(() => mount(REDUCED_OUTPUT_MOCK)).not.toThrow();
});

it('ListensCollection does not throw with full output', async () => {
  expect(() => mount(FULL_OUTPUT_MOCK)).not.toThrow();
});
