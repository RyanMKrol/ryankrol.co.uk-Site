import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

import './MovieRatingsForm.css'

const movieRatingsConfig = [
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
      initialValues={movieRatingsConfig.reduce((acc, item) => {
        acc[item.itemName] = ''
        return acc
      }, {})}
      validate={values =>
        movieRatingsConfig.reduce((acc, item) => {
          if (item.required && !values[item.itemName]) {
            acc[item.itemName] = 'Required'
          }
          return acc
        }, {})
      }
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form className="movie-ratings-form">
          {movieRatingsConfig.map(item =>
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
