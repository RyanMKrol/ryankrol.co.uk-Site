/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';
import AlbumRatingUpdateModal from './AlbumRatingUpdateModal';

import styles from './AlbumRatingDisplayCard.module.css';

export default function AlbumRatingDisplayCard({
  highlights,
  artist,
  date,
  rating,
  thumbnail,
  title,
  editCallback,
}) {
  return typeof editCallback === 'undefined' ? (
    <AlbumCard
      highlights={highlights}
      artist={artist}
      date={date}
      rating={rating}
      thumbnail={thumbnail}
      title={title}
    />
  ) : (
    <AlbumCardWithModal
      highlights={highlights}
      artist={artist}
      date={date}
      rating={rating}
      thumbnail={thumbnail}
      title={title}
      editCallback={editCallback}
    />
  );
}

function AlbumCardWithModal({
  highlights,
  artist,
  date,
  rating,
  thumbnail,
  title,
  editCallback,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a onClick={() => setModalOpen(true)}>
        <AlbumCard
          highlights={highlights}
          artist={artist}
          date={date}
          rating={rating}
          thumbnail={thumbnail}
          title={title}
        />
      </a>
      <AlbumRatingUpdateModal
        initHighlights={highlights}
        initArtist={artist}
        initRating={rating}
        initThumbnail={thumbnail}
        initTitle={title}
        date={date}
        editCallback={editCallback}
        isOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

function AlbumCard({ highlights, artist, date, rating, thumbnail, title }) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <img alt="Album Thumbnail" src={thumbnail} className={styles.image} />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body1">{artist}</Typography>
          <br />
          <Typography variant="body2">
            <b>Highlights</b>: {highlights}
          </Typography>
          <br />
          <Typography variant="caption">{date}</Typography>
        </CardContent>
        <CardActions className={styles.iconContainer}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <ChangeHistoryIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>{rating}</span>
          </Typography>
        </CardActions>
      </Card>
    </div>
  );
}
