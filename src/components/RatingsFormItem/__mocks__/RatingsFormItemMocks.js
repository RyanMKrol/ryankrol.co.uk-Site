import { RatingsFormItem, CustomError } from '../RatingsFormItem';

const TEXT_INPUT_MOCK = (
  <RatingsFormItem
    fieldTitle={'test-text-input-fieldTitle'}
    fieldType={'text'}
    currentValue={'test-text-input-currentValue'}
    fieldName={'test-text-input-fieldName'}
  />
);

const PASSWORD_INPUT_MOCK = (
  <RatingsFormItem
    fieldTitle={'test-password-input-fieldTitle'}
    fieldType={'password'}
    currentValue={'test-password-input-currentValue'}
    fieldName={'test-password-input-fieldName'}
  />
);

const RANGE_INPUT_MOCK = (
  <RatingsFormItem
    fieldTitle={'test-range-input-fieldTitle'}
    fieldType={'range'}
    currentValue={50}
    fieldName={'test-range-input-fieldName'}
  />
);

const DEFAULT_CUSTOM_ERROR_MOCK = (
  <CustomError>
    <p>Test</p>
  </CustomError>
);

export {
  TEXT_INPUT_MOCK, PASSWORD_INPUT_MOCK, RANGE_INPUT_MOCK, DEFAULT_CUSTOM_ERROR_MOCK,
};
