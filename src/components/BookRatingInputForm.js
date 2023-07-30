import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function BookRatingsInputForm({ onFormSubmit }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [overview, setOverview] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0);

  const [titleMissing, setTitleMissing] = useState(false);
  const [authorMissing, setAuthorMissing] = useState(false);
  const [overviewMissing, setOverviewMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isTitleMissing = title === '';
    const isAuthorMissing = author === '';
    const isOverviewMissing = overview === '';
    const isPasswordMissing = password === '';

    if (
      isTitleMissing ||
      isAuthorMissing ||
      isOverviewMissing ||
      isPasswordMissing
    ) {
      setTitleMissing(isTitleMissing);
      setAuthorMissing(isAuthorMissing);
      setOverviewMissing(isOverviewMissing);
      setPasswordMissing(isPasswordMissing);
    } else {
      onFormSubmit({
        title,
        author,
        overview,
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
        label="Author"
        id="author"
        onChange={(event) => {
          setAuthor(event.target.value);
          setAuthorMissing(event.target.value === '');
        }}
        error={authorMissing}
      />
      <br />
      <br />
      <TextField
        required
        variant="standard"
        fullWidth
        label="Overview"
        id="overview"
        onChange={(event) => {
          setOverview(event.target.value);
          setOverviewMissing(event.target.value === '');
        }}
        error={overviewMissing}
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
          max={10}
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
