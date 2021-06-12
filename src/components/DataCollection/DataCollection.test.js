import React from 'react';
import fetch from 'node-fetch';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import flushPromises from '../../utils/TestUtils';

import {
  FULL_OUTPUT_MOCK,
  REDUCED_OUTPUT_MOCK,
  REDUCED_OUTPUT_MOCK_WITH_SORTER,
  EXAMPLE_LISTENS_MOCK_ONE,
  EXAMPLE_LISTENS_MOCK_TWO,
} from './__mocks__/DataCollectionMocks';

jest.mock('node-fetch');

it('renders DataCollection with full output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  const collection = shallow(FULL_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
});

it('renders DataCollection with reduced output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  const collection = shallow(REDUCED_OUTPUT_MOCK);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
});

it('renders DataCollection with reduced output using custom sorter', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  const collection = shallow(REDUCED_OUTPUT_MOCK_WITH_SORTER);

  await flushPromises();

  expect(toJson(collection)).toMatchSnapshot();
});

it('DataCollection does not throw with full output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  expect(() => mount(FULL_OUTPUT_MOCK)).not.toThrow();
});

it('DataCollection does not throw with reduced output', async () => {
  fetch.mockResolvedValueOnce({ json: () => [EXAMPLE_LISTENS_MOCK_ONE, EXAMPLE_LISTENS_MOCK_TWO] });
  expect(() => mount(REDUCED_OUTPUT_MOCK)).not.toThrow();
});
