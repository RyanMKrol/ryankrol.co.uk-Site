import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import { validateFormValues, onSubmitHandler } from './MovieRatingsForm';

import {
  TEXT_INPUT_MOCK,
  PASSWORD_INPUT_MOCK,
  RANGE_INPUT_MOCK,
  DEFAULT_CUSTOM_ERROR_MOCK,
} from './__mocks__/MovieRatingsFormMocks';

jest.mock('node-fetch');

it('renders MovieRatingsForm text field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{TEXT_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders MovieRatingsForm password field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{PASSWORD_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders MovieRatingsForm range field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{RANGE_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('validates values correctly', () => {
  const testItems = {
    title: 'test-title',
    gist: 'test-gist',
    craftsmanship: 'test-craftsmanship',
    characters: 'test-characters',
    story: 'test-story',
    sound: undefined,
    blind: undefined,
    password: undefined,
  };
  const result = validateFormValues(testItems);

  expect(result).toEqual({
    sound: 'Required',
    blind: 'Required',
    password: 'Required',
  });
});

it('fetches data correctly', async () => {
  const fetchJsonMock = {
    message: 'test-message',
  };
  const windowAlertMock = jest.fn();
  const setSubmittingMock = jest.fn();

  fetch.mockResolvedValueOnce({ json: () => fetchJsonMock });
  jest.spyOn(window, 'alert').mockImplementation(windowAlertMock);

  const setSubmittingBlob = {
    setSubmitting: setSubmittingMock,
  };

  const values = [1, 2, 3];
  const result = await onSubmitHandler(values, setSubmittingBlob);

  expect(windowAlertMock).toBeCalledWith('test-message');
  expect(setSubmittingMock).toBeCalled();
});
