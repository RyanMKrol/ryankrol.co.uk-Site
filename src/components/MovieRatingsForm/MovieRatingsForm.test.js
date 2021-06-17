import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import MovieRatingsForm, { validateFormValues, onSubmitHandler } from './MovieRatingsForm';

jest.mock('node-fetch');

it('renders MovieRatingsForm', () => {
  const listensItem = mount(
    <Formik>
      <Form>
        <MovieRatingsForm />
      </Form>
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
