import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typography from '@mui/material/Typography';

import styles from './styles/CardStyles.module.css';

export default function AlbumRatingDisplayCard({
  highlights,
  artist,
  date,
  rating,
  thumbnail,
  title,
}) {
  return (
    <div className={styles.card}>
      <Card sx={{ width: 280 }}>
        <CardMedia
          sx={{
            height: 250,
            width: 250,
            margin: 'auto',
            marginTop: '15px',
            borderRadius: '4px',
          }}
          image={thumbnail}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography variant="body1">{artist}</Typography>
          <br />
          <Typography variant="body2">Highlights: {highlights}</Typography>
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
