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

import styles from './MovieRatingViewerCard.module.css';

export default function MovieRatingViewerCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{
          height: 400,
          width: 300,
          margin: 'auto',
        }}
        image="https://m.media-amazon.com/images/M/MV5BMTAxNDkxODIyMDZeQTJeQWpwZ15BbWU4MDQ2Mjg4NDIy._V1_SX300.jpg"
        title="green iguana"
      />
      <CardContent className={styles.descriptionContainer}>
        <Typography gutterBottom variant="h5" component="div">
          Insert Title Here
        </Typography>
        <Typography variant="body2">Insert Description Here</Typography>
      </CardContent>
      <CardActions className={styles.iconContainer}>
        <div className={styles.cardButton}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <ChangeHistoryIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>75</span>
          </Typography>
        </div>
        <div className={styles.cardButton}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <MenuBookIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>75</span>
          </Typography>
        </div>
        <div className={styles.cardButton}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <ManIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>75</span>
          </Typography>
        </div>
        <div className={styles.cardButton}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <MusicNoteIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>75</span>
          </Typography>
        </div>
        <div className={styles.cardButton}>
          <Typography className={styles.buttonTextContainer} variant="body2">
            <ConstructionIcon className={styles.scoreValue} fontSize="small" />{' '}
            <span className={styles.scoreValue}>75</span>
          </Typography>
        </div>
      </CardActions>
    </Card>
  );
}
