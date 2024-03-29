import SiteHeaderRatingsButton from './SiteHeaderRatingsButton';
import SiteHeaderVinylButton from './SiteHeaderVinylButton';
import SiteHeaderHeaderText from './SiteHeaderHeaderText';
import SiteHeaderListeningButton from './SiteHeaderListeningButton';

import styles from './SiteHeader.module.css';

export default function SiteHeader() {
  return (
    <div className={styles.container}>
      <SiteHeaderHeaderText />
      <div className={styles.headerButtons}>
        <span className={styles.buttonContainer}>
          <SiteHeaderRatingsButton />
        </span>
        <span className={styles.buttonContainer}>
          <SiteHeaderVinylButton />
        </span>
        <span className={styles.buttonContainer}>
          <SiteHeaderListeningButton />
        </span>
      </div>
    </div>
  );
}
