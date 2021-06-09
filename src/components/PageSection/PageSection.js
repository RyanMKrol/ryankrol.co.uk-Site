import React from 'react';

import styles from './PageSection.module.css';

/**
 * Generates the section title
 *
 * @param {string} title The title of the section
 * @returns {React.Component} JSX for section title
 */
function generateSectionTitle(title) {
  return title ? <h1 className={styles.title}>{title}</h1> : null;
}

/**
 * Component for rendering page section
 *
 * @param {object} props The props
 * @returns {React.Component} JSX PageSection component
 */
function PageSection(props) {
  return (
    <div className={styles.section}>
      {generateSectionTitle(props.title)}
      <div className="page-container">{props.children}</div>
    </div>
  );
}

export default PageSection;
