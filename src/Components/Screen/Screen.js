import React from 'react'
import PrimarySearchAppBar from './AppBar'
import {useTheme} from '@emotion/react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {useLocation} from 'react-router-dom';
import Box from '@mui/material/Box';
//custom components
import SignUp from '../Authenticate/SignUp';
import Login from '../Authenticate/Login.js';
import Feed from '../Feeds/Feed.js';
import Notification  from '../Notification/Notification.js';
import Profile from '../Profile/Profile.js';
import JobsPage from '../Jobs/Jobs.js';
import MyAccount from '../MyAccount/MyAccount.js';

function Screen({updateMode}) {
    const location =useLocation();
    const path=location.pathname;
    const theme=useTheme();
    console.log(path);
    // console.log(theme.palette.background);
  return (
  <>
    {/* <Paper> */}
    {/* sx={{bgcolor:theme.palette.mode=="dark"?"#262626":""}} */}
    <Box sx={{bgcolor:theme.palette.background.default}}>
     { path.toLowerCase()!=="/login" && path.toLowerCase()!=="/signup"?
        <PrimarySearchAppBar updateMode={updateMode}/>:
        <></>
     }       
    <Container sx={{marginTop:path.toLowerCase()!="/login" && path.toLowerCase()!=="/signup"?"60px":0,minHeight:"100vh",}}>
        <br/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" element={<Feed/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/accounts" element={<MyAccount/>}/>
            <Route path="/notification" element={<Notification/>}/>
            <Route path="/jobs" element={<JobsPage/>}/>
        </Routes> 
    </Container>
    {/* </Paper> */}
    </Box>
  </>

  )
}

export default Screen