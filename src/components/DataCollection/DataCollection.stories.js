import React from 'react';

import { REDUCED_OUTPUT_LISTENS_MOCK, FULL_OUTPUT_LISTENS_MOCK } from './__mocks__';

export default {
  title: 'Components/DataCollection',
};

/**
 * story for the full output
 *
 * @returns {React.Component} JSX for the DataCollection
 */
export const fullOutput = () => FULL_OUTPUT_LISTENS_MOCK;

/**
 * story for the reduced output
 *
 * @returns {React.Component} JSX for the DataCollection
 */
export const reducedOutput = () => REDUCED_OUTPUT_LISTENS_MOCK;
