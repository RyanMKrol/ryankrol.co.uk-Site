/* eslint-disable @next/next/no-img-element */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import styles from './ConcertItemDisplayCard.module.css';

export default function ConcertItemDisplayCard({
  artist,
  profileUrl,
  venue,
  eventUrl,
  score,
}) {
  const classBasedOnScore =
    score >= 3 ? styles.high : score > 0 ? styles.medium : styles.low;

  const profileUrlElement = profileUrl ? (
    <Typography variant="body1">
      <a href={profileUrl}>Artist Profile Link</a>
    </Typography>
  ) : null;

  return (
    <div className={styles.cardContainer}>
      <Card className={`${classBasedOnScore} ${styles.card}`}>
        <CardContent>
          <Typography gutterBottom variant="h6">
            <a href={eventUrl}>{artist}</a>
          </Typography>
          <Typography variant="body1">{venue}</Typography>
          {profileUrlElement}
          <br />
        </CardContent>
      </Card>
    </div>
  );
}
