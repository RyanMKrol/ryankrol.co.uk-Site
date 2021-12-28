/* eslint-disable no-alert */

import React from 'react';
import { Formik, Form } from 'formik';
import fetch from 'node-fetch';

import { baseEndpoint } from '../../utils/ProdUtils';
import { RatingsFormItem, PASSWORD_TYPE } from '../RatingsFormItem';

import styles from './VinylCollectionForm.module.css';

const VINYL_API_ENDPOINT = `${baseEndpoint()}/vinyl`;

const VINYL_INPUT_CONFIG = [
  { itemName: 'title', itemTitle: 'Record Title', itemType: 'text' },
  { itemName: 'artist', itemTitle: 'Artist', itemType: 'text' },
  { itemName: 'mood', itemTitle: 'Mood', itemType: 'text' },
  { itemName: 'password', itemTitle: 'Password', itemType: PASSWORD_TYPE },
];

/**
 * Generates the initial form values
 *
 * @returns {object} The default value for each form item
 */
function generateInitialFormValues() {
  return VINYL_INPUT_CONFIG.reduce((acc, item) => {
    acc[item.itemName] = '';
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
  return VINYL_INPUT_CONFIG.reduce((acc, item) => {
    if (typeof values[item.itemName] === 'undefined') {
      acc[item.itemName] = 'Required';
    }
    return acc;
  }, {});
}

export const onSubmitHandler = (values, { setSubmitting }) => fetch(VINYL_API_ENDPOINT, {
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
  return VINYL_INPUT_CONFIG.map((item) => (
    <RatingsFormItem
      fieldName={item.itemName}
      fieldTitle={item.itemTitle}
      fieldType={item.itemType}
      currentValue={values[item.itemName]}
    />
  ));
}

/**
 * UI Component representing a form to input vinyl items
 *
 * @returns {string} The UI component
 */
function VinylCollectionForm() {
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

export default VinylCollectionForm;
