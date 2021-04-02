import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

/**
 * Class representing a UI component for the loading icon
 *
 * @returns {string} HTML markup for the loading icon
 */
function LoadingIcon() {
  return <FontAwesomeIcon className="fa-spin" icon={faCircleNotch} size="6x" />;
}

export default LoadingIcon;
