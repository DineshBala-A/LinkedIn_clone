import React from 'react'
import FeedCard from './FeedCard'
import Container from '@mui/material/Container'
import AddPost from './AddPost'

function Feed() {
  return (
   <>
   <Container sx={{px:{"sx":0,"sm":10,"md":20,"lg":40}}}>
    <AddPost/>
    <FeedCard/>
   </Container>
   </>
  )
}

export default Feed