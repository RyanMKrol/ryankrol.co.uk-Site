import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';
import PageSection from './PageSection';

import { MOCK_WITH_TITLE, MOCK_WITHOUT_TITLE } from './__mocks__/PageSectionMocks';

it('renders page section correctly without a title', () => {
  const pageSection = shallow(MOCK_WITHOUT_TITLE);
  expect(toJson(pageSection)).toMatchSnapshot();
});

it('renders page section correctly with a title', () => {
  const pageSection = shallow(MOCK_WITH_TITLE);
  expect(toJson(pageSection)).toMatchSnapshot();
});

it('renders page section without a title without throwing', () => {
  expect(() => mount(MOCK_WITHOUT_TITLE)).not.toThrow();
});

it('renders page section with a title without throwing', () => {
  expect(() => mount(MOCK_WITH_TITLE)).not.toThrow();
});
