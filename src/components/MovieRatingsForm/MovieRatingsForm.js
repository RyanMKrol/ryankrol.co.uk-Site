/* eslint-disable no-alert */

import React from 'react';
import { Formik, Form } from 'formik';
import { apiUtils, ratingsFormUtils } from '../../utils';

import './MovieRatingsForm.css';

const RATINGS_API_ENDPOINT = `${apiUtils.default()}/ratings/movie`;
const DEFAULT_RANGE_FIELD_VALUE = 50;

const MOVIE_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Title', itemType: 'text' },
  { itemName: 'gist', itemTitle: 'The Gist', itemType: 'text' },
  { itemName: 'craftsmanship', itemTitle: 'Craftsmanship', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'characters', itemTitle: 'Characters', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'story', itemTitle: 'Story', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'sound', itemTitle: 'Sound', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'blind', itemTitle: 'Blind Score', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'password', itemTitle: 'password', itemType: ratingsFormUtils.PASSWORD_TYPE },
];

/**
 * UI Component representing a form to input movie ratings
 *
 * @returns {string} The UI component
 */
function MovieRatingsForm() {
  return (
    <div>
      <h1>Rate a movie!</h1>
      <Formik
        initialValues={MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
          acc[item.itemName] = item.itemType === ratingsFormUtils.RANGE_TYPE
            ? DEFAULT_RANGE_FIELD_VALUE
            : '';
          return acc;
        }, {})}
        validate={(values) => MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
          if (!values[item.itemName]) {
            acc[item.itemName] = 'Required';
          }
          return acc;
        }, {})
        }
        onSubmit={(values, { setSubmitting }) => {
          fetch(RATINGS_API_ENDPOINT, {
            method: 'post',
            body: JSON.stringify(values),
            headers: { 'Content-Type': 'application/json' },
          })
            .then((res) => res.json())
            .then((json) => window.alert(json.message))
            .then(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="movie-ratings-form">
            {MOVIE_RATINGS_CONFIG.map((item) => ratingsFormUtils.generateField(
              item.itemName,
              item.itemTitle,
              item.itemType,
              values[item.itemName],
            ))}
            <div className="form-item">
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MovieRatingsForm;
