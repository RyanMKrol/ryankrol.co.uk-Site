import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {
  FULL_SIZE_ALBUMS_MOCK,
  LIMITED_SIZE_ALBUMS_MOCK,
  FULL_SIZE_MOVIES_MOCK,
  LIMITED_SIZE_MOVIES_MOCK,
} from './__mocks__/RatingsSubPageMocks';

export default {
  title: 'Pages/RatingsSubPage',
};

export const FullSizeAlbumRatings = () => <Router>{FULL_SIZE_ALBUMS_MOCK}</Router>;
export const LimitedSizeAlbumRatings = () => <Router>{LIMITED_SIZE_ALBUMS_MOCK}</Router>;
export const FullSizeMovieRatings = () => <Router>{FULL_SIZE_MOVIES_MOCK}</Router>;
export const LimitedSizeMovieRatings = () => <Router>{LIMITED_SIZE_MOVIES_MOCK}</Router>;
