import Link from 'next/link';

import headerStyles from './SiteHeaderHeaderText.module.css';
import sharedStyles from './styles/HeaderStyles.module.css';

export default function SiteHeaderHeaderText() {
  return (
    <Link className={sharedStyles.buttonLink} href="/">
      <span className={headerStyles.headerText}>Ryan Krol</span>
    </Link>
  );
}
