import React from 'react';

import { FULL_OUTPUT_MOCK, REDUCED_OUTPUT_MOCK } from './__mocks__/DataCollectionMocks';

export default {
  title: 'Components/DataCollection',
};

/**
 * story for the full output
 *
 * @returns {React.Component} JSX for the DataCollection
 */
export const fullOutput = () => FULL_OUTPUT_MOCK;

/**
 * story for the reduced output
 *
 * @returns {React.Component} JSX for the DataCollection
 */
export const reducedOutput = () => REDUCED_OUTPUT_MOCK;
