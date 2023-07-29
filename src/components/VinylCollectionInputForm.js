import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function VinylCollectionInputForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [password, setPassword] = useState('');

  const [titleMissing, setTitleMissing] = useState(false);
  const [artistMissing, setArtistMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isTitleMissing = title === '';
    const isArtistMissing = artist === '';
    const isPasswordMissing = password === '';

    if (isTitleMissing || isArtistMissing || isPasswordMissing) {
      setTitleMissing(isTitleMissing);
      setArtistMissing(isArtistMissing);
      setPasswordMissing(isPasswordMissing);
    } else {
      onFormSubmit({
        title,
        artist,
        password,
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
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={formSubmit}>
          Submit
        </Button>
      </Container>
    </Container>
  );
}
