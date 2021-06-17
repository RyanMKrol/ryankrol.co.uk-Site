/* eslint-disable no-alert */

import React from 'react';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import { baseEndpoint } from '../../utils/ProdUtils';
import { RatingsFormItem, RANGE_TYPE, PASSWORD_TYPE } from '../RatingsFormItem';

import styles from './AlbumRatingsForm.module.css';

const RATINGS_API_ENDPOINT = `${baseEndpoint()}/ratings/album`;
const DEFAULT_RANGE_FIELD_VALUE = 50;

const ALBUM_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Album Title', itemType: 'text' },
  { itemName: 'artist', itemTitle: 'Artist', itemType: 'text' },
  { itemName: 'rating', itemTitle: 'Rating', itemType: RANGE_TYPE },
  { itemName: 'highlights', itemTitle: 'Highlights', itemType: 'text' },
  { itemName: 'mood', itemTitle: 'Mood', itemType: 'text' },
  { itemName: 'password', itemTitle: 'Password', itemType: PASSWORD_TYPE },
];

/**
 * Generates the initial form values
 *
 * @returns {object} The default value for each form item
 */
function generateInitialFormValues() {
  return ALBUM_RATINGS_CONFIG.reduce((acc, item) => {
    acc[item.itemName] = item.itemType === RANGE_TYPE ? DEFAULT_RANGE_FIELD_VALUE : '';
    return acc;
  }, {});
}

/**
 * Validates the current form values
 *
 * @param {Array<object>} values An array of values currently in the form
 * @returns {object} An array of form item names that need validation
 */
export function validateFormValues(values) {
  return ALBUM_RATINGS_CONFIG.reduce((acc, item) => {
    if (typeof values[item.itemName] === 'undefined') {
      acc[item.itemName] = 'Required';
    }
    return acc;
  }, {});
}

export const onSubmitHandler = (values, { setSubmitting }) => fetch(RATINGS_API_ENDPOINT, {
  method: 'post',
  body: JSON.stringify(values),
  headers: { 'Content-Type': 'application/json' },
})
  .then((res) => res.json())
  .then((json) => window.alert(json.message))
  .then(() => setSubmitting(false));

/**
 * Generates the form fields
 *
 * @param {Array<any>} values Current values in the form
 * @returns {string} JSX for an individual form field
 */
function generateFormFields(values) {
  return ALBUM_RATINGS_CONFIG.map((item) => (
    <RatingsFormItem
      fieldName={item.itemName}
      fieldTitle={item.itemTitle}
      fieldType={item.itemType}
      currentValue={values[item.itemName]}
    />
  ));
}

/**
 * UI Component representing a form to input movie ratings
 *
 * @returns {string} The UI component
 */
function AlbumRatingsForm() {
  return (
    <Formik
      initialValues={generateInitialFormValues()}
      validate={validateFormValues}
      onSubmit={onSubmitHandler}
    >
      {({ isSubmitting, values }) => (
        <Form className={styles.form}>
          {generateFormFields(values)}
          <div className={styles.formItem}>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AlbumRatingsForm;
