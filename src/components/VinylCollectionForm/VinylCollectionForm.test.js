import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import VinylCollectionForm, { validateFormValues, onSubmitHandler } from './VinylCollectionForm';

jest.mock('node-fetch');

it('renders VinylCollectionForm', () => {
  const listensItem = mount(
    <Formik>
      <Form>
        <VinylCollectionForm />
      </Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('validates values correctly', () => {
  const testItems = {
    title: 'test-title',
    artist: 'test-artist',
    mood: 'test-mood',
    password: undefined,
  };
  const result = validateFormValues(testItems);

  expect(result).toEqual({
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
  await onSubmitHandler(values, setSubmittingBlob);

  expect(windowAlertMock).toBeCalledWith('test-message');
  expect(setSubmittingMock).toBeCalled();
});
