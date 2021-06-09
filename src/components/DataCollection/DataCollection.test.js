import React from 'react';
import fetch from 'node-fetch';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import flushPromises from '../../utils/TestUtils';

import {
  FULL_OUTPUT_LISTENS_MOCK,
  REDUCED_OUTPUT_LISTENS_MOCK,
  EXAMPLE_LISTENS_MOCK_ONE,
  EXAMPLE_LISTENS_MOCK_TWO,
} from './__mocks__';

jest.mock('node-fetch');

it('renders DataCollection with full output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE] });
  const collection = shallow(FULL_OUTPUT_LISTENS_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
});

it('renders DataCollection with reduced output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE] });
  const collection = shallow(REDUCED_OUTPUT_LISTENS_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
});

it('renders DataCollection with full output, with multiple values', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  const collection = shallow(FULL_OUTPUT_LISTENS_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
  expect(collection.state().data.toString()).toBe(
    [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO].toString(),
  );
});

it('renders DataCollection with reduced output, with multiple values', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  const collection = shallow(REDUCED_OUTPUT_LISTENS_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
  expect(collection.state().data.toString()).toBe(
    [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO].toString(),
  );
});

it('DataCollection does not throw with full output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE] });
  expect(() => mount(FULL_OUTPUT_LISTENS_MOCK)).not.toThrow();
});

it('DataCollection does not throw with reduced output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE] });
  expect(() => mount(REDUCED_OUTPUT_LISTENS_MOCK)).not.toThrow();
});
