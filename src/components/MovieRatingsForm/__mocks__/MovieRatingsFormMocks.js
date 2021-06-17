import MovieRatingsForm from '../MovieRatingsForm';

const TEXT_INPUT_MOCK = (
  <MovieRatingsForm
    fieldTitle={'test-text-input-fieldTitle'}
    fieldType={'text'}
    currentValue={'test-text-input-currentValue'}
    fieldName={'test-text-input-fieldName'}
  />
);

const PASSWORD_INPUT_MOCK = (
  <MovieRatingsForm
    fieldTitle={'test-password-input-fieldTitle'}
    fieldType={'password'}
    currentValue={'test-password-input-currentValue'}
    fieldName={'test-password-input-fieldName'}
  />
);

const RANGE_INPUT_MOCK = (
  <MovieRatingsForm
    fieldTitle={'test-range-input-fieldTitle'}
    fieldType={'range'}
    currentValue={50}
    fieldName={'test-range-input-fieldName'}
  />
);

export { TEXT_INPUT_MOCK, PASSWORD_INPUT_MOCK, RANGE_INPUT_MOCK };
