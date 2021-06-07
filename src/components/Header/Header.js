import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './Header.module.css';

const HEADER_ITEMS = [
  {
    destination: '/portfolio',
    title: 'Portfolio',
  },
];

/**
 * Generates the header links
 *
 * @returns {React.Component} JSX for link items
 */
const generateHeaderLinks = () => HEADER_ITEMS.map((linkItem) => (
    <Link key={linkItem.destination} to={linkItem.destination}>
      {linkItem.title}
    </Link>
));

/**
 * Component for rendering common page heading
 *
 * @returns {React.Component} JSX Header component
 */
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>RK</div>
      <div className={styles.links}>{generateHeaderLinks()}</div>
    </div>
  );
}

export default withRouter(Header);
