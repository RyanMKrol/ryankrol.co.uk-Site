import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import styles from './VinylDisplayCard.module.css';

export default function VinylDisplayCard({ artist, date, thumbnail, title }) {
  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card} sx={{ width: 280 }}>
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
          <Typography variant="caption">{date}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
