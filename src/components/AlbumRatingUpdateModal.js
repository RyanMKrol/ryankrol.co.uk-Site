import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Container from '@mui/material/Container';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AlbumRatingsUpdateModal({
  initHighlights,
  initArtist,
  initRating,
  initThumbnail,
  editCallback,
  isOpen,
  setModalOpen,
  date,
  title,
}) {
  const handleClose = () => setModalOpen(false);

  const [artist, setArtist] = useState(initArtist);
  const [highlights, setHighlights] = useState(initHighlights);
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(initRating);
  const [thumbnail, setThumbnail] = useState(initThumbnail);

  const [artistMissing, setArtistMissing] = useState(false);
  const [highlightsMissing, setHighlightsMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);
  const [thumbnailMissing, setThumbnailMissing] = useState(false);

  const formSubmit = () => {
    const isArtistMissing = artist === '';
    const isHighlightsMissing = highlights === '';
    const isPasswordMissing = password === '';
    const isThumbnailMissing = thumbnail === '';

    if (
      isArtistMissing ||
      isHighlightsMissing ||
      isPasswordMissing ||
      isThumbnailMissing
    ) {
      setArtistMissing(isArtistMissing);
      setHighlightsMissing(isHighlightsMissing);
      setPasswordMissing(isPasswordMissing);
      setThumbnailMissing(isThumbnailMissing);
    } else {
      editCallback({
        title,
        artist,
        highlights,
        password,
        rating,
        thumbnail,
        date,
      }).then((alertData) => {
        alert(`${alertData.status} - ${alertData.message}`);
        location.reload();
      });
    }
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Container maxWidth="sm">
          <TextField
            required
            disabled
            variant="standard"
            fullWidth
            label="Title"
            id="title"
            defaultValue={title}
          />
          <br />
          <br />
          <TextField
            required
            variant="standard"
            fullWidth
            label="Artist"
            id="artist"
            defaultValue={artist}
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
            defaultValue={highlights}
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
            variant="standard"
            fullWidth
            label="Thumbnail"
            id="thumbnail"
            defaultValue={thumbnail}
            onChange={(event) => {
              setThumbnail(event.target.value);
              setThumbnailMissing(event.target.value === '');
            }}
            error={thumbnailMissing}
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
              defaultValue={rating}
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
      </Box>
    </Modal>
  );
}
