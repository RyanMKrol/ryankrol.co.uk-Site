import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';

import styles from './BookRatingDisplayCard.module.css';

export default function BookRatingDisplayCard({
  title,
  author,
  rating,
  date,
  thumbnail,
  overview,
}) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <img src={thumbnail} className={styles.image} />
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
