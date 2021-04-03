import { Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const RANGE_TYPE = 'range';
const PASSWORD_TYPE = 'password';

/**
 * Class used to display errors on form validation
 */
class CustomError extends Component {
  /**
   * @param {Component} args Children to render in error
   */
  constructor(args) {
    super();

    this.children = args.children;
  }

  /**
   * renders the widget
   *
   * @returns {string} The HTML for the validation error
   */
  render() {
    return <div className="validation-error">{this.children}</div>;
  }
}

/**
 * Generates the title of the field
 *
 * @param {string} fieldTitle The title of the field
 * @param {string} fieldType The type of field we're rendering
 * @param {number} currentValue The current value of the field (only used for ranges)
 * @returns {string} Title to use for the current field
 */
function generateFieldTitle(fieldTitle, fieldType, currentValue) {
  if (fieldType === RANGE_TYPE) {
    return `${fieldTitle} - ${currentValue}`;
  }
  return `${fieldTitle}`;
}

/**
 * Generates the tag to use to fetch input
 *
 * @param {string} fieldName fieldName
 * @param {string} fieldTitle fieldTitle
 * @param {string} fieldType fieldType
 * @returns {string} HTML representing just the field
 */
function generateFieldTag(fieldName, fieldTitle, fieldType) {
  switch (fieldType) {
    case PASSWORD_TYPE:
      return <Field type={PASSWORD_TYPE} name={fieldName} autoComplete="current-password" />;
    case RANGE_TYPE:
      return <Field type={RANGE_TYPE} name={fieldName} min="0" max="100" />;
    default:
      return <Field type={fieldType} name={fieldName} autoComplete="off" />;
  }
}

/**
 * Generates a wrapped input for gathering data
 *
 * @param {string} fieldName fieldName
 * @param {string} fieldTitle fieldTitle
 * @param {string} fieldType fieldType
 * @param {number} currentValue currentValue
 * @returns {string} HTML representing the field and associated wrappers
 */
function generateField(fieldName, fieldTitle, fieldType, currentValue) {
  return (
    <div key={fieldName} className="form-item">
      {generateFieldTitle(fieldTitle, fieldType, currentValue)}
      <br />
      {generateFieldTag(fieldName, fieldTitle, fieldType)}
      <ErrorMessage name={fieldName} component={CustomError} />
    </div>
  );
}

export { RANGE_TYPE, PASSWORD_TYPE, generateField };
