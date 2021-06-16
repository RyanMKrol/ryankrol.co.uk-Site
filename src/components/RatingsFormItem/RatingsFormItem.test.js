import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Formik, Form } from 'formik';

import {
  TEXT_INPUT_MOCK,
  PASSWORD_INPUT_MOCK,
  RANGE_INPUT_MOCK,
  DEFAULT_CUSTOM_ERROR_MOCK,
} from './__mocks__/RatingsFormItemMocks';

it('renders RatingsFormItem text field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{TEXT_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders RatingsFormItem password field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{PASSWORD_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders RatingsFormItem range field', () => {
  const listensItem = mount(
    <Formik>
      <Form>{RANGE_INPUT_MOCK}</Form>
    </Formik>,
  );
  expect(toJson(listensItem)).toMatchSnapshot();
});

it('renders CustomError', () => {
  const listensItem = mount(DEFAULT_CUSTOM_ERROR_MOCK);
  expect(toJson(listensItem)).toMatchSnapshot();
});
