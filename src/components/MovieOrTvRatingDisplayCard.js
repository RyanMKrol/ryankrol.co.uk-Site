import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ManIcon from '@mui/icons-material/Man';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConstructionIcon from '@mui/icons-material/Construction';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

import styles from './MovieOrTvRatingDisplayCard.module.css';

export default function MovieOrTvRatingDisplayCard({
  overallScore,
  storyScore,
  characterScore,
  musicScore,
  craftsmanshipScore,
  thumbnail,
  title,
  gist,
  date,
}) {
  return (
    <div className={styles.card}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          sx={{
            height: 400,
            width: 260,
            margin: 'auto',
            marginTop: '20px',
            borderRadius: '4px',
          }}
          image={thumbnail}
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
              <span className={styles.scoreValue}>{musicScore}</span>
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
