/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';
import BookRatingUpdateModal from './BookRatingUpdateModal';

import styles from './BookRatingDisplayCard.module.css';

export default function BookRatingDisplayCard({
  title,
  author,
  rating,
  date,
  thumbnail,
  overview,
  editCallback,
}) {
  return typeof editCallback === 'undefined' ? (
    <BookCard
      title={title}
      author={author}
      rating={rating}
      date={date}
      thumbnail={thumbnail}
      overview={overview}
    />
  ) : (
    <BookCardWithModal
      title={title}
      author={author}
      rating={rating}
      date={date}
      thumbnail={thumbnail}
      overview={overview}
      editCallback={editCallback}
    />
  );
}

function BookCardWithModal({
  title,
  author,
  rating,
  date,
  thumbnail,
  overview,
  editCallback,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a onClick={() => setModalOpen(true)}>
        <BookCard
          title={title}
          author={author}
          rating={rating}
          date={date}
          thumbnail={thumbnail}
          overview={overview}
        />
      </a>
      <BookRatingUpdateModal
        title={title}
        initAuthor={author}
        initRating={rating}
        initThumbnail={thumbnail}
        initOverview={overview}
        date={date}
        editCallback={editCallback}
        isOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

function BookCard({ title, author, rating, date, thumbnail, overview }) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <img alt="Book Thumbnail" src={thumbnail} className={styles.image} />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {title}
          </Typography>
          <Typography variant="h6">{author}</Typography>
          <br />
          <Typography variant="body2">{overview}</Typography>
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
