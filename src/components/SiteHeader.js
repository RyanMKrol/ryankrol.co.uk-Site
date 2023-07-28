import SiteHeaderRatingsButton from './SiteHeaderRatingsButton';
import SiteHeaderVinylButton from './SiteHeaderVinylButton';

import styles from './SiteHeader.module.css';

export default function BasicMenu() {
  return (
    <div className={styles.container}>
      <span className={styles.headerText}>Ryan Krol</span>
      <div className={styles.headerButtons}>
        <span className={styles.buttonContainer}>
          <SiteHeaderRatingsButton />
        </span>
        <span className={styles.buttonContainer}>
          <SiteHeaderVinylButton />
        </span>
      </div>
    </div>
  );
}
