import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import styles from './MovieOrTvRatingsInputForm.module.css';

export default function MovieOrTvRatingsInputForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [gist, setGist] = useState('');
  const [password, setPassword] = useState('');
  const [total, setTotal] = useState(0);
  const [story, setStory] = useState(0);
  const [craftmanship, setCraftmanship] = useState(0);
  const [sound, setSound] = useState(0);
  const [characters, setCharacters] = useState(0);

  const [titleMissing, setTitleMissing] = useState(false);
  const [gistMissing, setGistMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = (event) => {
    const titleMissing = title === '';
    const gistMissing = gist === '';
    const passwordMissing = password === '';

    if (titleMissing || gistMissing || passwordMissing) {
      setTitleMissing(titleMissing);
      setGistMissing(gistMissing);
      setPasswordMissing(passwordMissing);
    } else {
      onFormSubmit({
        title,
        gist,
        password,
        total,
        story,
        craftmanship,
        sound,
        characters,
      }).then((alertData) => {
        alert(`${alertData.status} - ${alertData.message}`);
      });
    }
  };

  return (
    <Container maxWidth="sm">
      <TextField
        required
        variant="standard"
        className={styles.textInput}
        fullWidth
        label="Title"
        id="title"
        onChange={(event) => {
          setTitle(event.target.value);
          setTitleMissing(event.target.value === '');
        }}
        error={titleMissing}
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
        onChange={(event) => {
          setGist(event.target.value);
          setGistMissing(event.target.value === '');
        }}
        error={gistMissing}
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
        onChange={(event) => {
          setPassword(event.target.value);
          setPasswordMissing(event.target.value === '');
        }}
        error={passwordMissing}
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
          onChange={(event) => setTotal(event.target.value)}
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
          onChange={(event) => setStory(event.target.value)}
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
          onChange={(event) => setCraftmanship(event.target.value)}
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
          onChange={(event) => setSound(event.target.value)}
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
          onChange={(event) => setCharacters(event.target.value)}
        />
      </Container>
      <br />
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={formSubmit}>
          Submit
        </Button>
      </Container>
    </Container>
  );
}