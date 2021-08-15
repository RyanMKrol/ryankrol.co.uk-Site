import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { FULL_SIZE_MOCK, LIMITED_SIZE_MOCK } from './__mocks__/BooksPageMocks';

it('renders BooksPage correctly with full size', () => {
  const header = shallow(FULL_SIZE_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
it('renders BooksPage correctly with reduced size', () => {
  const header = shallow(LIMITED_SIZE_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
