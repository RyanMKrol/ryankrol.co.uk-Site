import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function AlbumRatingsInputForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [highlights, setHighlights] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0);

  const [titleMissing, setTitleMissing] = useState(false);
  const [artistMissing, setArtistMissing] = useState(false);
  const [highlightsMissing, setHighlightsMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isTitleMissing = title === '';
    const isArtistMissing = artist === '';
    const isHighlightsMissing = highlights === '';
    const isPasswordMissing = password === '';

    if (
      isTitleMissing ||
      isArtistMissing ||
      isHighlightsMissing ||
      isPasswordMissing
    ) {
      setTitleMissing(isTitleMissing);
      setArtistMissing(isArtistMissing);
      setHighlightsMissing(isHighlightsMissing);
      setPasswordMissing(isPasswordMissing);
    } else {
      onFormSubmit({
        title,
        artist,
        highlights,
        password,
        rating,
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
        label="Artist"
        id="artist"
        onChange={(event) => {
          setArtist(event.target.value);
          setArtistMissing(event.target.value === '');
        }}
        error={artistMissing}
      />
      <br />
      <br />
      <TextField
        required
        variant="standard"
        fullWidth
        label="Highlights"
        id="highlights"
        onChange={(event) => {
          setHighlights(event.target.value);
          setHighlightsMissing(event.target.value === '');
        }}
        error={highlightsMissing}
      />
      <br />
      <br />
      <TextField
        required
        type="password"
        variant="standard"
        fullWidth
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
        <Typography>Rating</Typography>
        <Slider
          max={100}
          min={0}
          size="small"
          valueLabelDisplay="auto"
          onChange={(event) => setRating(event.target.value)}
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
