import { Component } from 'react'
import { Field, ErrorMessage } from 'formik'

const RANGE_TYPE = 'range'
const PASSWORD_TYPE = 'password'

class CustomError extends Component {
  constructor(args) {
    super()

    this.children = args.children
  }

  render() {
    return <div className="validation-error">{this.children}</div>
  }
}

function generateFieldTitle(fieldTitle, fieldType, currentValue) {
  if (fieldType === RANGE_TYPE) {
    return `${fieldTitle} - ${currentValue}`
  } else {
    return `${fieldTitle}`
  }
}

function generateFieldTag(fieldName, fieldTitle, fieldType) {
  switch (fieldType) {
    case PASSWORD_TYPE:
      return <Field type={PASSWORD_TYPE} name={fieldName} autoComplete="current-password" />
    case RANGE_TYPE:
      return <Field type={RANGE_TYPE} name={fieldName} min="0" max="100" />
    default:
      return <Field type={fieldType} name={fieldName} autoComplete="off" />
  }
}

function generateField(fieldName, fieldTitle, fieldType, currentValue) {
  return (
    <div key={fieldName} className="form-item">
      {generateFieldTitle(fieldTitle, fieldType, currentValue)}
      <br />
      {generateFieldTag(fieldName, fieldTitle, fieldType)}
      <ErrorMessage name={fieldName} component={CustomError} />
    </div>
  )
}

export { RANGE_TYPE, PASSWORD_TYPE, generateField }
