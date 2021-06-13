import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { FULL_SIZE_MOCK, LIMITED_SIZE_MOCK } from './__mocks__/BooksPageMocks';

export default {
  title: 'Pages/BooksPage',
};

export const FullSize = () => <Router>{FULL_SIZE_MOCK}</Router>;
export const LimitedSize = () => <Router>{LIMITED_SIZE_MOCK}</Router>;
