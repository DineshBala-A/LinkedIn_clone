import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {  ThemeProvider } from '@mui/material/styles';
import { useTheme } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { host } from '../../host';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../MyContextProvider';



export default function SignUp() {
  const {user_id,set_user_id}=useContext(MyContext);
  const navigate = useNavigate();
const theme = useTheme();
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      passwordCfm: data.get('password-cfm'),
    });
    if(data.password!==data.passwordCfm){
      console.error("password mismatch")
      return ;
    }

    // console.log({"email":data.get("email"),"password":data.get("password-cfm")});
    const controller=new AbortController();
    const signal=controller.signal;
    fetch(`${host}/Profile`,
    {
      signal,
      method:"POST",
      // headers:{"Content-Type":"application/json"},
      headers:{"Content-Type":"application/json",'ngrok-skip-browser-warning': 'any-value'},
      body:JSON.stringify({"email": data.get('email'),"password":data.get('password-cfm')}),
    }
  ).then(response=>{
    if(!response.ok){
      throw new Error("Login failed");
    }
    return response.json();
  }).then(data=>{
    console.log("successfully signedup ")
    console.log(data);
    set_user_id(data);
    navigate('/', { state: { user_id: data } });
  }).catch(e=>{
    console.error(e.message);
  })
  return()=>{
    controller.abort();
  }
  };

  return (
    // <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <label>Email</label>
            <TextField
              margin="normal"
              required
              size="small"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
    
            <label>Password</label>
             <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <label>Confirm Password</label>

            <TextField
              margin="normal"
              required
              fullWidth
              size="small"
              name="password-cfm"
              label="Confirm Password"
              type="password"
              id="password-cfm"
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              color="primary"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // component={NavLink} to="/Feed"
            >
              Sign Up
            </Button>
            {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    // </ThemeProvider>
  );
}