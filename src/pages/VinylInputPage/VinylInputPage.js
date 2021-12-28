import React from 'react';

import { VinylCollectionForm } from '../../components';

import styles from './VinylInputPage.module.css';

/**
 * Page introducing the site
 *
 * @returns {string} JSX Content
 */
function VinylInputPage() {
  return (
    <div className={styles.container}>
      <h1 className="light">Add to the collection!</h1>
      <VinylCollectionForm />
    </div>
  );
}

export default VinylInputPage;
