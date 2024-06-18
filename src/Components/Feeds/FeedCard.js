import React, { useState, useEffect, useReducer, useContext } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Button, Menu, MenuItem, Avatar, Chip,Collapse, Box } from '@mui/material';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SaveIcon from '@mui/icons-material/Save';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import ReportIcon from '@mui/icons-material/Report';
import WorkIcon from '@mui/icons-material/Work';
import TextField from '@mui/material/TextField';
import Send from '@mui/icons-material/Send';
import AddPost from './AddPost';
import { host } from '../../host';
import { MyContext } from '../MyContextProvider';


const CommentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the comment data
  };

  const existingComments = [
    { id: 1, avatar: "", userName: 'Dinesh', text: 'kfjdkfjslkfjsalfj fkjdfjaslf dsa' },
    { id: 2, avatar: "", userName: 'Dharun', text: 'Can\'t wait to try this recipe!' },
    { id: 3, avatar: "", userName: 'Manoj', text: 'Yum! Paella is one of my favorites.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <TextField sx={{width:400}} autoComplete='off' placeholder="Write a comment..." />
        <IconButton type="submit"><Send/></IconButton>
      </form>
      <div>
        {existingComments.map(comment => (
          <div key={comment.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
            <Avatar alt={comment.userName} src={comment.avatar} sx={{ width: 32, height: 32, marginRight: '8px' }} />
            <div>
              <Typography variant="body2" gutterBottom>{comment.userName}</Typography>
              <Typography>{comment.text}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FeedCard = ({ id, username, subTitle, date, imageUrl, description, tag }) => {
  const [expanded,setExpanded]= useState(false);

  const handleExpandClick = (id) => {
    setExpanded(!expanded);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [likes, setLikes] = useState(0);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const isJob = tag?tag.toLowerCase() === 'job':false; // Check if the tag is 'job'

  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {username}
          </Avatar>
        }
        action={
          <div>
            <IconButton aria-label="menu" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <SaveIcon sx={{ mr: 1 }} />
                Save
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <VisibilityOffIcon sx={{ mr: 1 }} />
                Hide Posts
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ReportIcon sx={{ mr: 1 }} />
                Report Post
              </MenuItem>
            </Menu>
          </div>
        }
        title={
          <React.Fragment>
            {username}
            <Chip
              icon={<WorkIcon />}
              label={tag}
              size="small"
              color="primary"
              style={{ marginLeft: '8px' }}
            />
          </React.Fragment>
        }
        subheader={date}
      />
      {imageUrl!=null?
        <CardMedia
        component="img"
        image={imageUrl!=null?imageUrl:""}
        alt={username}
        sx={{ objectFit: 'cover' }}
        />
            
      :<></>}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="like" onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <Typography>{likes}</Typography>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="comment" onClick={handleExpandClick}>
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="save">
          <SaveIcon />
        </IconButton>
        {isJob && ( // Conditionally render the button
          <div style={{ marginLeft: 'auto' }}>
            <Button variant="contained" color="primary">Apply</Button>
          </div>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CommentForm />
        </CardContent>
      </Collapse>
    </Card>
  );
};

const ParentComponent = () => {
  const [feedData, setFeedData] = useState([]);
  const {reducer, forceUpdate}=useContext(MyContext);
  useEffect(()=>{
    setFeedData([
      
      {
        id: 2,
        username: "Bob",
        subTitle: "Post 2", // Add subTitle here
        date: "October 2, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
        description: "Jobs Available",
        tag: "Job"
      },
      {
        id: 1,
        username: "DB",
        subTitle: "Post 2", // Add subTitle here
        date: "October 2, 2024",
        imageUrl: "https://th.bing.com/th/id/OIP.ctMjmVft35BgBCwgMmRU6gAAAA?rs=1&pid=ImgDetMain",
        description: `About the job
        Basic Qualifications
        
         3+ years of non-internship professional software development experience
         2+ years of non-internship design or architecture (design patterns, reliability and scaling) of new and existing systems experience
         Experience programming with at least one software programming language
        
        Preferred Qualifications
        
         3+ years of full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations experience
         Bachelor's degree in computer science or equivalent`,
        tag: "Job"
      },
      {
        id: 4,
        username: "DB",
        subTitle: "Post 3", // Add subTitle here
        date: "October 19, 2024",
        imageUrl:null,
        // imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa tincidunt nunc pulvinar sapien. Faucibus turpis in eu mi bibendum. In cursus turpis massa tincidunt dui. Quisque id diam vel quam elementum pulvinar etiam non. Lorem ipsum dolor sit amet consectetur adipiscing. Non quam lacus suspendisse faucibus interdum posuere lorem. Adipiscing elit duis tristique sollicitudin nibh sit. Ac turpis egestas maecenas pharetra convallis posuere. Elit ullamcorper dignissim cras tincidunt lobortis. In nibh mauris cursus mattis molestie. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Amet nisl purus in mollis nunc sed id semper.",
        tag: "genereal"
      },
      {
        id: 3,
        username: "Bob",
        subTitle: "Post 3", // Add subTitle here
        date: "October 2, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
        description: "Jobs Available",
        tag: "Job"
      },
      
    ])
  },[])

  useEffect(()=>{
    console.log(feedData);
  },[feedData]);

  //FETCH DATA 
  // useEffect(() => {
  //   const controller=new AbortController();
  //   const signal=controller.signal;
  //   // Fetch feed data from an API
  //   fetch(`${host}/Post-details`,{
  //     signal,
  //     method:"GET",
  //     headers:{"Content-Type":"application/json",'ngrok-skip-browser-warning': 'any-value'},
  //   }).then(response=>{
  //     if(!response.ok){
  //       throw new Error("Error");
  //     }
  //     return response.json();
  //   }).then(data=>{
  //     console.log(data);
  //     setFeedData(data);
  //   }).catch(e=>{
  //     console.error(e.message);
  //   })
  //   return(()=>{
  //     controller.abort();
  //   })
  // }, [reducer]);

  

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
      {/* {feedData.map((feed,index) => ////////////////////// */}
      {feedData.map(obj => 
        // {console.log(obj)}
        (
          <FeedCard
            id={obj.id}
            key={obj.id}
            username={obj.username}
            subTitle={obj.subTitle}
            date={obj.date}
            imageUrl={obj.imageUrl}
            description={obj.description}
            expanded={obj.expanded}
            // handleExpandClick={() => handleExpandClick(obj.id)}
            tag={obj.type}
          />
        )
      )
      // { 
      //   console.log(feed[0]);
      // }

      //FETCH FROM DATABASE
      // (
      //   <FeedCard
      //     // id={feed[0].id}
      //     id={index}
      //     key={index}
      //     username={feed[0].user.username}
      //     subTitle={feed[0].postDate}
      //     date={feed[0].date}
      //     imageUrl={feed[0].media}
      //     description={feed[0].description}
      //     expanded={false}
      //     // handleExpandClick={() => handleExpandClick(feed[0].id)}
      //     tag={feed[0].type}
      //   />
      // )
      // )
      }
    </Box>
  );
};

export default ParentComponent;