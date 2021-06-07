import React from 'react';

import { MOCK_WITH_TITLE, MOCK_WITHOUT_TITLE } from './__mocks__';

export default {
  title: 'Components/PageSection',
};

/**
 * Section without a title
 *
 * @returns {React.Component} JSX for the PageSection
 */
export const SectionWithoutTitle = () => MOCK_WITHOUT_TITLE;

/**
 * Section with a title
 *
 * @returns {React.Component} JSX for the PageSection
 */
export const SectionWithTitle = () => MOCK_WITH_TITLE;
