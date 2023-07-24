import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import styles from './MovieOrTvRatingsInputForm.module.css';

export default function MovieOrTvRatingsInputForm() {
  return (
    <Container maxWidth="sm">
      <TextField
        required
        variant="standard"
        className={styles.textInput}
        fullWidth
        label="Title"
        id="title"
      />
      <br />
      <br />
      <TextField
        required
        variant="standard"
        className={styles.textInput}
        fullWidth
        label="The Gist"
        id="gist"
      />
      <br />
      <br />
      <TextField
        required
        variant="standard"
        className={styles.textInput}
        fullWidth
        type="password"
        label="Password"
        id="password"
      />
      <br />
      <br />
      <br />
      <Container maxWidth="sm">
        <Typography>Total</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'red',
          }}
        />
        <br />
        <Typography>Story</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'orange',
          }}
        />
        <br />
        <Typography>Craftmanship</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'green',
          }}
        />
        <br />
        <Typography>Sound</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'blue',
          }}
        />
        <br />
        <Typography>Characters</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'purple',
          }}
        />
      </Container>
    </Container>
  );
}
