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
        <MenuItem onClick={handleClose}>
          <Link className={styles.buttonLink} href="/ratings/album">
            Albums
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={styles.buttonLink} href="/ratings/book">
            Books
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={styles.buttonLink} href="/ratings/movie">
            Movies
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link className={styles.buttonLink} href="/ratings/tv">
            TV
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
