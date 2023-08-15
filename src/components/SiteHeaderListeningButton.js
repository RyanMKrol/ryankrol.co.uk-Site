import Button from '@mui/material/Button';
import Link from 'next/link';

import styles from './styles/HeaderStyles.module.css';

export default function SiteHeaderListeningButton() {
  return (
    <Link className={styles.buttonLink} href="/listens">
      <Button>Listens</Button>
    </Link>
  );
}
