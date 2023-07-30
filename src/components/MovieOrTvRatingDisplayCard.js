/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ManIcon from '@mui/icons-material/Man';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import MovieOrTvRatingUpdateModal from './MovieOrTvRatingUpdateModal';

import styles from './MovieOrTvRatingDisplayCard.module.css';

export default function MovieOrTvRatingDisplayCard({
  overallScore,
  storyScore,
  characterScore,
  soundScore,
  craftsmanshipScore,
  thumbnail,
  title,
  gist,
  date,
  editCallback,
}) {
  return typeof editCallback === 'undefined' ? (
    <MovieOrTvCard
      overallScore={overallScore}
      storyScore={storyScore}
      characterScore={characterScore}
      soundScore={soundScore}
      craftsmanshipScore={craftsmanshipScore}
      thumbnail={thumbnail}
      title={title}
      gist={gist}
      date={date}
    />
  ) : (
    <MovieOrTvCardWithModal
      overallScore={overallScore}
      storyScore={storyScore}
      characterScore={characterScore}
      soundScore={soundScore}
      craftsmanshipScore={craftsmanshipScore}
      thumbnail={thumbnail}
      title={title}
      gist={gist}
      date={date}
      editCallback={editCallback}
    />
  );
}

function MovieOrTvCardWithModal({
  overallScore,
  storyScore,
  characterScore,
  soundScore,
  craftsmanshipScore,
  thumbnail,
  title,
  gist,
  date,
  editCallback,
}) {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a onClick={() => setModalOpen(true)}>
        <MovieOrTvCard
          overallScore={overallScore}
          storyScore={storyScore}
          characterScore={characterScore}
          soundScore={soundScore}
          craftsmanshipScore={craftsmanshipScore}
          thumbnail={thumbnail}
          title={title}
          gist={gist}
          date={date}
        />
      </a>
      <MovieOrTvRatingUpdateModal
        initOverallScore={overallScore}
        initStoryScore={storyScore}
        initCharacterScore={characterScore}
        initSoundScore={soundScore}
        initCraftsmanshipScore={craftsmanshipScore}
        initThumbnail={thumbnail}
        title={title}
        initGist={gist}
        date={date}
        editCallback={editCallback}
        isOpen={isModalOpen}
        setModalOpen={setModalOpen}
      />
    </>
  );
}

function MovieOrTvCard({
  overallScore,
  storyScore,
  characterScore,
  soundScore,
  craftsmanshipScore,
  thumbnail,
  title,
  gist,
  date,
}) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <img
          alt="Movie or Tv Series Thumbnail"
          src={thumbnail}
          className={styles.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{gist}</Typography>
          <br />
          <Typography variant="caption">{date}</Typography>
        </CardContent>
        <CardActions className={styles.iconContainer}>
          <div>
            <Typography className={styles.buttonTextContainer} variant="body2">
              <ChangeHistoryIcon
                className={styles.scoreValue}
                fontSize="small"
              />{' '}
              <span className={styles.scoreValue}>{overallScore}</span>
            </Typography>
          </div>
          <div>
            <Typography className={styles.buttonTextContainer} variant="body2">
              <MenuBookIcon className={styles.scoreValue} fontSize="small" />{' '}
              <span className={styles.scoreValue}>{storyScore}</span>
            </Typography>
          </div>
          <div>
            <Typography className={styles.buttonTextContainer} variant="body2">
              <ManIcon className={styles.scoreValue} fontSize="small" />{' '}
              <span className={styles.scoreValue}>{characterScore}</span>
            </Typography>
          </div>
          <div>
            <Typography className={styles.buttonTextContainer} variant="body2">
              <MusicNoteIcon className={styles.scoreValue} fontSize="small" />{' '}
              <span className={styles.scoreValue}>{soundScore}</span>
            </Typography>
          </div>
          <div>
            <Typography className={styles.buttonTextContainer} variant="body2">
              <ConstructionIcon
                className={styles.scoreValue}
                fontSize="small"
              />{' '}
              <span className={styles.scoreValue}>{craftsmanshipScore}</span>
            </Typography>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
