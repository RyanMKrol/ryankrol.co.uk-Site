import React from 'react';

import { FULL_OUTPUT_MOCK, REDUCED_OUTPUT_MOCK } from './__mocks__';

export default {
  title: 'Components/ListensCollection',
};

/**
 * story for the full output
 *
 * @returns {React.Component} JSX for the ListensCollection
 */
export const fullOutput = () => FULL_OUTPUT_MOCK;

/**
 * story for the reduced output
 *
 * @returns {React.Component} JSX for the ListensCollection
 */
export const reducedOutput = () => REDUCED_OUTPUT_MOCK;
