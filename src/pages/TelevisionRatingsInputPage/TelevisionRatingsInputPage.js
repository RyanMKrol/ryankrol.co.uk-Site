import React from 'react';

import { TelevisionRatingsForm } from '../../components';

import styles from './TelevisionRatingsInputPage.module.css';

/**
 * Page introducing the site
 *
 * @returns {string} JSX Content
 */
function TelevisionRatingsInputPage() {
  return (
    <div className={styles.container}>
      <h1 className="light">Rate a TV show!</h1>
      <TelevisionRatingsForm />
    </div>
  );
}

export default TelevisionRatingsInputPage;
