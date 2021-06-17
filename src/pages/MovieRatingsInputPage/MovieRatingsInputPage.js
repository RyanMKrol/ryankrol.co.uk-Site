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
      <h1 className="light">Rate a movie!</h1>
      <MovieRatingsForm />
    </div>
  );
}

export default MovieRatingsInputPage;
