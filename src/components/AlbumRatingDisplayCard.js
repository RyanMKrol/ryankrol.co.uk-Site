import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';

import styles from './AlbumRatingDisplayCard.module.css';

export default function AlbumRatingDisplayCard({
  highlights,
  artist,
  date,
  rating,
  thumbnail,
  title,
}) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <img src={thumbnail} className={styles.image} />
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
