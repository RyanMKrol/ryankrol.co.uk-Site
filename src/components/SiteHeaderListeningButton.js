import Button from '@mui/material/Button';
import Link from 'next/link';

import styles from './styles/HeaderStyles.module.css';

export default function SiteHeaderListeningButton() {
  return (
    <Button>
      <Link className={styles.buttonLink} href="/listens">
        Listens
      </Link>
    </Button>
  );
}
