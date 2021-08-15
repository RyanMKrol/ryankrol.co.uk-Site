import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  FULL_SIZE_ALBUMS_MOCK,
  LIMITED_SIZE_ALBUMS_MOCK,
  FULL_SIZE_MOVIES_MOCK,
  LIMITED_SIZE_MOVIES_MOCK,
  FULL_SIZE_TELEVISION_MOCK,
  LIMITED_SIZE_TELEVISION_MOCK,
} from './__mocks__/RatingsPageMocks';

it('renders RatingsPage correctly with full size album ratings', () => {
  const header = shallow(FULL_SIZE_ALBUMS_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsPage correctly with limited size album ratings', () => {
  const header = shallow(LIMITED_SIZE_ALBUMS_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsPage correctly with full size movie ratings', () => {
  const header = shallow(FULL_SIZE_MOVIES_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsPage correctly with limited size movie ratings', () => {
  const header = shallow(LIMITED_SIZE_MOVIES_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsPage correctly with full size television ratings', () => {
  const header = shallow(FULL_SIZE_TELEVISION_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});

it('renders RatingsPage correctly with limited size television ratings', () => {
  const header = shallow(LIMITED_SIZE_TELEVISION_MOCK);
  expect(toJson(header)).toMatchSnapshot();
});
