import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function MovieOrTvRatingsInputForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [gist, setGist] = useState('');
  const [password, setPassword] = useState('');
  const [overallScore, setOverallScore] = useState(0);
  const [storyScore, setStoryScore] = useState(0);
  const [craftsmanshipScore, setCraftsmanshipScore] = useState(0);
  const [soundScore, setSoundScore] = useState(0);
  const [characterScore, setCharacterScore] = useState(0);

  const [titleMissing, setTitleMissing] = useState(false);
  const [gistMissing, setGistMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isTitleMissing = title === '';
    const isGistMissing = gist === '';
    const isPasswordMissing = password === '';

    if (isTitleMissing || isGistMissing || isPasswordMissing) {
      setTitleMissing(isTitleMissing);
      setGistMissing(isGistMissing);
      setPasswordMissing(isPasswordMissing);
    } else {
      onFormSubmit({
        title,
        gist,
        password,
        overallScore,
        storyScore,
        craftsmanshipScore,
        soundScore,
        characterScore,
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
        <Typography>Overall</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'red',
          }}
          onChange={(event) => setOverallScore(event.target.value)}
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
          onChange={(event) => setStoryScore(event.target.value)}
        />
        <br />
        <Typography>Craftsmanship</Typography>
        <Slider
          marks
          max={10}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          sx={{
            color: 'green',
          }}
          onChange={(event) => setCraftsmanshipScore(event.target.value)}
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
          onChange={(event) => setSoundScore(event.target.value)}
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
          onChange={(event) => setCharacterScore(event.target.value)}
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
