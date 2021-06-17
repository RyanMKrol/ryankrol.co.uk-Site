import React from 'react';

import { MovieRatingsForm } from '../../components';

import styles from './MovieRatingsInputPage.module.css';

/**
 * Page introducing the site
 *
 * @returns {string} JSX Content
 */
function MovieRatingsInputPage() {
  return (
    <div className={styles.container}>
      <h2>Rate a movie!</h2>
      <MovieRatingsForm />
    </div>
  );
}

export default MovieRatingsInputPage;
