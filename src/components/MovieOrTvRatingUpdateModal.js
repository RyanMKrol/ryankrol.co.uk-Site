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

export default function MovieOrTvRatingUpdateModal({
  title,
  initOverallScore,
  initStoryScore,
  initCharacterScore,
  initSoundScore,
  initCraftsmanshipScore,
  initThumbnail,
  initGist,
  date,
  editCallback,
  isOpen,
  setModalOpen,
}) {
  const handleClose = () => setModalOpen(false);

  const [gist, setGist] = useState(initGist);
  const [thumbnail, setThumbnail] = useState(initThumbnail);
  const [password, setPassword] = useState('');
  const [overallScore, setOverallScore] = useState(initOverallScore);
  const [storyScore, setStoryScore] = useState(initStoryScore);
  const [characterScore, setCharacterScore] = useState(initCharacterScore);
  const [soundScore, setSoundScore] = useState(initSoundScore);
  const [craftsmanshipScore, setCraftsmanshipScore] = useState(
    initCraftsmanshipScore
  );

  const [gistMissing, setGistMissing] = useState(false);
  const [thumbnailMissing, setThumbnailMissing] = useState(false);
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isGistMissing = gist === '';
    const isThumbnailMissing = thumbnail === '';
    const isPasswordMissing = password === '';

    if (isGistMissing || isPasswordMissing || isThumbnailMissing) {
      setGistMissing(isGistMissing);
      setPasswordMissing(isPasswordMissing);
      setThumbnailMissing(isThumbnailMissing);
    } else {
      editCallback({
        title,
        gist,
        thumbnail,
        password,
        overallScore,
        storyScore,
        characterScore,
        soundScore,
        craftsmanshipScore,
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
            disabled
            required
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
            label="The Gist"
            id="gist"
            defaultValue={gist}
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
              defaultValue={overallScore}
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
              defaultValue={storyScore}
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
              defaultValue={craftsmanshipScore}
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
              defaultValue={soundScore}
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
              defaultValue={characterScore}
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
      </Box>
    </Modal>
  );
}
