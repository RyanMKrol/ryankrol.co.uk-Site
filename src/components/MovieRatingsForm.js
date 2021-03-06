import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import baseEndpoint from './../utils'

import './MovieRatingsForm.css'

const RATINGS_API_ENDPOINT = `${baseEndpoint()}/ratings`
const DEFAULT_RANGE_FIELD_VALUE = 50
const RANGE_TYPE = 'range'

const MOVIE_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Title', itemType: 'text' },
  { itemName: 'gist', itemTitle: 'The Gist', itemType: 'text' },
  { itemName: 'craftsmanship', itemTitle: 'Craftsmanship', itemType: RANGE_TYPE },
  { itemName: 'characters', itemTitle: 'Characters', itemType: RANGE_TYPE },
  { itemName: 'story', itemTitle: 'Story', itemType: RANGE_TYPE },
  { itemName: 'sound', itemTitle: 'Sound', itemType: RANGE_TYPE },
  { itemName: 'blind', itemTitle: 'Blind Score', itemType: RANGE_TYPE },
  { itemName: 'password', itemTitle: 'password', itemType: 'password' }
]

class CustomError extends Component {
  constructor(args) {
    super()

    this.children = args.children
  }

  render() {
    return <div className="validation-error">{this.children}</div>
  }
}

function generateField(fieldName, fieldTitle, fieldType) {
  return (
    <div className="form-item">
      {fieldTitle}
      <br />
      <Field type={fieldType} name={fieldName} />
      <ErrorMessage name={fieldName} component={CustomError} />
    </div>
  )
}

function generateRangeField(fieldName, fieldTitle, currentValue) {
  return (
    <div className="form-item">
      {fieldTitle} - {currentValue}
      <br />
      <Field type={RANGE_TYPE} name={fieldName} min="0" max="100" />
      <ErrorMessage name={fieldName} component={CustomError} />
    </div>
  )
}

const MovieRatingsForm = () => (
  <div>
    <h1>Rate a movie!</h1>
    <Formik
      initialValues={MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
        acc[item.itemName] = item.itemType === RANGE_TYPE ? DEFAULT_RANGE_FIELD_VALUE : ''
        return acc
      }, {})}
      validate={values =>
        MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
          if (!values[item.itemName]) {
            acc[item.itemName] = 'Required'
          }
          return acc
        }, {})
      }
      onSubmit={(values, { setSubmitting }) => {
        fetch(RATINGS_API_ENDPOINT, {
          method: 'post',
          body: JSON.stringify(values),
          headers: { 'Content-Type': 'application/json' }
        })
          .then(res => res.json())
          .then(json => window.alert(json.message))
          .then(() => setSubmitting(false))
      }}
    >
      {({ isSubmitting, values }) => (
        <Form className="movie-ratings-form">
          {MOVIE_RATINGS_CONFIG.map(item =>
            item.itemType === RANGE_TYPE
              ? generateRangeField(item.itemName, item.itemTitle, values[item.itemName])
              : generateField(item.itemName, item.itemTitle, item.itemType)
          )}
          <div className="form-item">
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)

export default MovieRatingsForm
