import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import baseEndpoint from './../utils'

import './MovieRatingsForm.css'

const MOVIE_RATINGS_CONFIG = [
  { itemName: 'title', itemTitle: 'Title', itemType: 'text', required: 1 },
  { itemName: 'gist', itemTitle: 'Gist', itemType: 'text', required: 1 },
  { itemName: 'craftsmanship', itemTitle: 'Craftsmanship', itemType: 'number', required: 1 },
  { itemName: 'characters', itemTitle: 'Characters', itemType: 'number', required: 1 },
  { itemName: 'story', itemTitle: 'Story', itemType: 'number', required: 1 },
  { itemName: 'sound', itemTitle: 'Sound', itemType: 'number', required: 1 },
  { itemName: 'blind', itemTitle: 'Blind', itemType: 'number', required: 1 },
  { itemName: 'thoughts', itemTitle: 'Thoughts', itemType: 'text', required: 0 },
  { itemName: 'notableScenes', itemTitle: 'Notable Scenes', itemType: 'text', required: 0 },
  { itemName: 'password', itemTitle: 'password', itemType: 'password', required: 1 }
]

const RATINGS_API_ENDPOINT = `${baseEndpoint()}/ratings`

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

const MovieRatingsForm = () => (
  <div>
    <h1>Rate a movie!</h1>
    <Formik
      initialValues={MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
        acc[item.itemName] = ''
        return acc
      }, {})}
      validate={values =>
        MOVIE_RATINGS_CONFIG.reduce((acc, item) => {
          if (item.required && !values[item.itemName]) {
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
      {({ isSubmitting }) => (
        <Form className="movie-ratings-form">
          {MOVIE_RATINGS_CONFIG.map(item =>
            generateField(item.itemName, item.itemTitle, item.itemType)
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
