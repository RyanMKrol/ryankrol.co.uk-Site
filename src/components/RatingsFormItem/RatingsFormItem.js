import { Component } from 'react';
import { Field, ErrorMessage } from 'formik';

const RANGE_TYPE = 'range';
const PASSWORD_TYPE = 'password';

/**
 * Class used to display errors on form validation
 */
export class CustomError extends Component {
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
 * Generates the underlying Field tag to use to fetch input
 *
 * @param {string} fieldName Name of the field
 * @param {string} fieldType Type of field being rendered
 * @returns {string} HTML representing just the field
 */
function generateFieldTag(fieldName, fieldType) {
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
 * A component representing a RatingsFormItem item
 *
 * @param {object} props Information to generate a form field
 * @returns {React.Component} JSX RatingsFormItem component
 */
function RatingsFormItem(props) {
  return (
    <div key={props.fieldName} className="form-item">
      {generateFieldTitle(props.fieldTitle, props.fieldType, props.currentValue)}
      <br />
      {generateFieldTag(props.fieldName, props.fieldType)}
      <ErrorMessage name={props.fieldName} component={CustomError} />
    </div>
  );
}

export { RANGE_TYPE, PASSWORD_TYPE, RatingsFormItem };
