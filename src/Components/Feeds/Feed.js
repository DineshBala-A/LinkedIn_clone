import React, { useState,useContext } from 'react'
import FeedCard from './FeedCard'
import Container from '@mui/material/Container'
import AddPost from './AddPost';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import MiniProfile from './MiniProfile';
import News from './News';
import { useLocation } from 'react-router-dom';
import { MyContext } from '../MyContextProvider';

function Feed(props) {
  // const {user_id}=props;
  const {user_id,set_user_id,reducer, forceUpdate}=useContext(MyContext);
  console.log(props);
  // const location = useLocation();
  // const user_id = location.state?.user_id; 
  // const [userId,setUserId]=useState(user_id)
  console.log(user_id)
  return (
   <>
   {/* <Container sx={{px:{"sx":0,"sm":10,"md":20,"lg":40}}}> */}
   <Container >
   <Box sx={{ flexGrow: 1 ,px:{"xs":0,"sm":10}}}>
      <Grid container spacing={2}>
        <Grid item sx={{display:{"xs":"none","sm":"none", "md":"block"}}} xs={0} md={4} lg={3} >
          <div style={{position:"sticky", top:85,}} >
            <MiniProfile />
          </div>
        </Grid>
        
        <Grid item xs={12} md={8} lg={6}>
          <AddPost/>
          <FeedCard/>
        </Grid>

        <Grid item md={0} lg={3} sx={{display:{"xs":"none","sm":"none", "md":"none","lg":"block"}}}>
        <div style={{position:"sticky", top:85,}} >
          <News/>
        </div>
        </Grid>
      </Grid>
    </Box>
   </Container>
   </>
  )
}

export default Feed