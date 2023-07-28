import Button from '@mui/material/Button';
import Link from 'next/link';

import styles from './styles/HeaderStyles.module.css';

export default function SiteHeaderVinylButton() {
  return (
    <Button>
      <Link className={styles.buttonLink} href="/vinyl">
        Vinyl
      </Link>
    </Button>
  );
}
