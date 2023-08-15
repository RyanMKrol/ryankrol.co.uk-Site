import Button from '@mui/material/Button';
import Link from 'next/link';

import styles from './styles/HeaderStyles.module.css';

export default function SiteHeaderVinylButton() {
  return (
    <Link className={styles.buttonLink} href="/vinyl">
      <Button>Vinyl</Button>
    </Link>
  );
}
