/* eslint-disable no-alert */

import React from 'react';
import { Formik, Form } from 'formik';
import { apiUtils, ratingsFormUtils } from '../../utils';
import './AlbumRatingsForm.css';

const RATINGS_API_ENDPOINT = `${apiUtils.default()}/ratings/album`;
const DEFAULT_RANGE_FIELD_VALUE = 50;

const ALBUM_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Album Title', itemType: 'text' },
  { itemName: 'artist', itemTitle: 'Artist', itemType: 'text' },
  { itemName: 'rating', itemTitle: 'Rating', itemType: ratingsFormUtils.RANGE_TYPE },
  { itemName: 'highlights', itemTitle: 'Highlights', itemType: 'text' },
  { itemName: 'mood', itemTitle: 'Mood', itemType: 'text' },
  { itemName: 'password', itemTitle: 'password', itemType: ratingsFormUtils.PASSWORD_TYPE },
];

/**
 * UI Component representing a form to input album ratings
 *
 * @returns {string} The UI component
 */
function AlbumRatingsForm() {
  return (
    <div>
      <h1>Rate an Album!</h1>
      <Formik
        initialValues={ALBUM_RATINGS_CONFIG.reduce((acc, item) => {
          acc[item.itemName] = item.itemType === ratingsFormUtils.RANGE_TYPE ? DEFAULT_RANGE_FIELD_VALUE : '';
          return acc;
        }, {})}
        validate={(values) => ALBUM_RATINGS_CONFIG.reduce((acc, item) => {
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
          <Form className="album-ratings-form">
            {ALBUM_RATINGS_CONFIG.map((item) => ratingsFormUtils.generateField(
              item.itemName,
              item.itemTitle,
              item.itemType,
              values[item.itemName],
            ))}
            <div key="form-submit" className="form-item">
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

export default AlbumRatingsForm;
