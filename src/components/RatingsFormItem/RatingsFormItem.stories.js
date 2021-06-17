import { Formik, Form } from 'formik';

import {
  TEXT_INPUT_MOCK,
  PASSWORD_INPUT_MOCK,
  RANGE_INPUT_MOCK,
} from './__mocks__/RatingsFormItemMocks';

export default {
  title: 'Components/RatingsFormItem',
};

export const TextInputField = () => (
  <Formik>
    <Form>{TEXT_INPUT_MOCK}</Form>
  </Formik>
);

export const PasswordInputField = () => (
  <Formik>
    <Form>{PASSWORD_INPUT_MOCK}</Form>
  </Formik>
);

export const RangeInputField = () => (
  <Formik>
    <Form>{RANGE_INPUT_MOCK}</Form>
  </Formik>
);
