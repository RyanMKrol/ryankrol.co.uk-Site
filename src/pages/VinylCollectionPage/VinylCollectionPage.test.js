import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import VinylCollectionPage, { sortVinyl } from './VinylCollectionPage';

it('renders VinylCollectionPage correctly', () => {
  const header = shallow(<VinylCollectionPage />);
  expect(toJson(header)).toMatchSnapshot();
});

describe('sortVinyl', () => {
  it('return a < b', () => {
    const a = {
      artist: 'akon',
    };
    const b = {
      artist: 'bkon',
    };

    expect(sortVinyl(a, b)).toEqual(-1);
  });

  it('return a > b', () => {
    const a = {
      artist: 'akon',
    };
    const b = {
      artist: 'bkon',
    };

    expect(sortVinyl(b, a)).toEqual(1);
  });

  it('return a == b', () => {
    const a = {
      artist: 'akon',
    };

    expect(sortVinyl(a, a)).toEqual(0);
  });
});
