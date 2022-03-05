import { useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import bookingContext from '../context/bookings/BookingContext';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        MERN Inn.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();
export default function SignInSide() {

  const host = 'http://localhost:5000'
  const bookingContexts = useContext(bookingContext);
  const { showAlert } = bookingContexts;
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [credentials, setCredentials] = useState({ email: "", password: "" })
  let history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify(credentials)
    }
    );
    const json = await response.json();
    if (json.success) {
      localStorage.setItem('token', json.authToken);
      history.push('/booking-history');
      showAlert("Logged In Successfully", "success")
    }
    else {
      setF(false);
      setCredentials({ email: "", password: '' })
      setTimeout(() => {
        setF(true);
      }, 2000);
    }

  };

  const handleChange = (item) => {
    setCredentials({ ...credentials, [item.target.name]: item.target.value })
    if (item.target.name === '') {
      setIsError(true);
      setErrorMessage(`${item.target.name} can not be empty`)
    }
    else {
      setIsError(false)
    }
  }
  const [f, setF] = useState(true)
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                error={isError}
                helperText={isError ? errorMessage : ''}
                value={credentials.email}
                onChange={handleChange}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                value={credentials.password}
                onChange={handleChange}
                fullWidth
                name="password"
                error={isError}
                helperText={isError ? errorMessage : ''}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <p style={{ display: !f ? 'inline-block' : 'none', color: 'red', fontSize: '0.8rem' }}>Email or Password are incorrect, try again.</p>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>

                <Grid item className="mx-auto">
                  <Link to="/signup" variant="body2" >
                    Don't have an account? Sign-up now.
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
