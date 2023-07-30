import { useState } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function ClearCacheForm({ onFormSubmit }) {
  const [password, setPassword] = useState('');
  const [passwordMissing, setPasswordMissing] = useState(false);

  const formSubmit = () => {
    const isPasswordMissing = password === '';

    if (isPasswordMissing) {
      setPasswordMissing(isPasswordMissing);
    } else {
      onFormSubmit({
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
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" onClick={formSubmit}>
          Clear Server Cache
        </Button>
      </Container>
    </Container>
  );
}
