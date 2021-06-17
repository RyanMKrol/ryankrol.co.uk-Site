import React from 'react';

import { AlbumRatingsForm } from '../../components';

import styles from './AlbumRatingsInputPage.module.css';

/**
 * Page introducing the site
 *
 * @returns {string} JSX Content
 */
function AlbumRatingsInputPage() {
  return (
    <div className={styles.container}>
      <h2>Rate an album!</h2>
      <AlbumRatingsForm />
    </div>
  );
}

export default AlbumRatingsInputPage;
