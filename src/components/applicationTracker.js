import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function applicationTracker() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FactCheckIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Job Application Tracker
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="company"
              label="Company Name"
              name="company"
              autoComplete="company"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="role"
              label="Role Title"
              type="role"
              id="role"
              // autoComplete="current-password"
            />
            <TextField
              margin="normal"
              // required
              fullWidth
              id="salary"
              label="Salary Rate"
              name="salary"
              autoComplete="salary"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="link"
              label="Link to Job Advert"
              name="link"
              autoComplete="link"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="application date"
              label="Application Date (dd/mm/yyyy)"
              name="application date"
              autoComplete="application date"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="contact"
              label="Contact Name, Email, Phone-Number"
              name="contact"
              rows={3}
              multiline
              autoComplete="contact"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="response"
              label="Response"
              name="response"
              autoComplete="response"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="interview stage"
              label="Interview Stage"
              name="interview stage"
              autoFocus
            />
            <TextField
              margin="normal"
              fullWidth
              id="interview info"
              label="Interview Time, Date & Interviewer Name"
              name="interview info"
              rows={3}
              multiline
              autoComplete="interview info"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="offer"
              label="Offer"
              name="offer"
              autoComplete="offer"
              autoFocus
            />
            {/* <FormControlLabel */}
              {/* control={<Checkbox value="remember" color="primary" />} */}
              {/* label="Remember me" */}
            {/* /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}