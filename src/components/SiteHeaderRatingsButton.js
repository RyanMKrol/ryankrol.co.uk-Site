import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

import styles from './styles/HeaderStyles.module.css';

export default function SiteHeaderRatingsButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button id="basic-button" onClick={handleClick}>
        Ratings
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link className={styles.buttonLink} href="/ratings/album">
          <MenuItem onClick={handleClose}>Albums</MenuItem>
        </Link>
        <Link className={styles.buttonLink} href="/ratings/book">
          <MenuItem onClick={handleClose}>Books</MenuItem>
        </Link>
        <Link className={styles.buttonLink} href="/ratings/movie">
          <MenuItem onClick={handleClose}>Movies</MenuItem>
        </Link>
        <Link className={styles.buttonLink} href="/ratings/tv">
          <MenuItem onClick={handleClose}>TV</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
