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
}) {
  const profileUrlElement = profileUrl ? (
    <Typography variant="body1">
      <a href={profileUrl}>Artist Profile Link</a>
    </Typography>
  ) : null;

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
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
