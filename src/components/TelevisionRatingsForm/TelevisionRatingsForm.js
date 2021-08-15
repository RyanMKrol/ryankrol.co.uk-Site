/* eslint-disable no-alert */

import React from 'react';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import { baseEndpoint } from '../../utils/ProdUtils';
import { RatingsFormItem, RANGE_TYPE, PASSWORD_TYPE } from '../RatingsFormItem';

import styles from './TelevisionRatingsForm.module.css';

const RATINGS_API_ENDPOINT = `${baseEndpoint()}/ratings/tv`;
const DEFAULT_RANGE_FIELD_VALUE = 50;

const TELEVISION_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Title', itemType: 'text' },
  { itemName: 'gist', itemTitle: 'The Gist', itemType: 'text' },
  { itemName: 'craftsmanship', itemTitle: 'Craftsmanship', itemType: RANGE_TYPE },
  { itemName: 'characters', itemTitle: 'Characters', itemType: RANGE_TYPE },
  { itemName: 'story', itemTitle: 'Story', itemType: RANGE_TYPE },
  { itemName: 'sound', itemTitle: 'Sound', itemType: RANGE_TYPE },
  { itemName: 'blind', itemTitle: 'Blind Score', itemType: RANGE_TYPE },
  { itemName: 'password', itemTitle: 'Password', itemType: PASSWORD_TYPE },
];

/**
 * Generates the initial form values
 *
 * @returns {object} The default value for each form item
 */
function generateInitialFormValues() {
  return TELEVISION_RATINGS_CONFIG.reduce((acc, item) => {
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
  return TELEVISION_RATINGS_CONFIG.reduce((acc, item) => {
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
  return TELEVISION_RATINGS_CONFIG.map((item) => (
    <RatingsFormItem
      fieldName={item.itemName}
      fieldTitle={item.itemTitle}
      fieldType={item.itemType}
      currentValue={values[item.itemName]}
    />
  ));
}

/**
 * UI Component representing a form to input television ratings
 *
 * @returns {string} The UI component
 */
function TelevisionRatingsForm() {
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

export default TelevisionRatingsForm;
