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

export default function BookRatingUpdateModal({
  initTitle,
  initAuthor,
  initRating,
  initThumbnail,
  initOverview,
  editCallback,
  isOpen,
  setModalOpen,
  date,
}) {
  const handleClose = () => setModalOpen(false);

  const [title, setTitle] = useState(initTitle);
  const [author, setAuthor] = useState(initAuthor);
  const [overview, setOverview] = useState(initOverview);
  const [thumbnail, setThumbnail] = useState(initThumbnail);
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(initRating);

  const [titleMissing, setTitleMissing] = useState(false);
  const [authorMissing, setAuthorMissing] = useState(false);
  const [thumbnailMissing, setThumbnailMissing] = useState(false);
  const [overviewMissing, setOverviewMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isTitleMissing = title === '';
    const isAuthorMissing = author === '';
    const isOverviewMissing = overview === '';
    const isPasswordMissing = password === '';
    const isThumbnailMissing = thumbnail === '';

    if (
      isTitleMissing ||
      isAuthorMissing ||
      isOverviewMissing ||
      isPasswordMissing ||
      thumbnailMissing
    ) {
      setTitleMissing(isTitleMissing);
      setAuthorMissing(isAuthorMissing);
      setOverviewMissing(isOverviewMissing);
      setPasswordMissing(isPasswordMissing);
      setThumbnailMissing(isThumbnailMissing);
    } else {
      editCallback({
        title,
        author,
        overview,
        thumbnail,
        password,
        rating,
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
            variant="standard"
            fullWidth
            label="Title"
            id="title"
            defaultValue={title}
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
            defaultValue={author}
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
            defaultValue={overview}
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
            variant="standard"
            fullWidth
            label="Thumbnail"
            id="thumbnail"
            defaultValue={thumbnail}
            onChange={(event) => {
              setThumbnail(event.target.value);
              setThumbnailMissing(event.target.value === '');
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
