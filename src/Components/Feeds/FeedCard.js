import React, { useState, useEffect } from 'react';
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

const CommentForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submitting the comment data
  };

  const existingComments = [
    { id: 1, avatar: '/static/images/avatar/1.jpg', userName: 'Dinesh', text: 'This looks delicious!' },
    { id: 2, avatar: '/static/images/avatar/2.jpg', userName: 'Dharun', text: 'Can\'t wait to try this recipe!' },
    { id: 3, avatar: '/static/images/avatar/3.jpg', userName: 'Manoj', text: 'Yum! Paella is one of my favorites.' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <textarea rows="4" cols="50" placeholder="Write a comment..." />
        <button type="submit">Submit</button>
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

const FeedCard = ({ id, username, subTitle, date, imageUrl, description, expanded, handleExpandClick, tag }) => {
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

  const isJob = tag.toLowerCase() === 'job'; // Check if the tag is 'job'

  return (
    <Card sx={{ maxWidth: 545 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
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
      <CardMedia
        component="img"
        image={imageUrl}
        alt={username}
        sx={{ objectFit: 'cover' }}
      />
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
  useEffect(()=>{
    setFeedData([{
        id: 2,
        username: "Bob",
        subTitle: "Post 2", // Add subTitle here
        date: "October 2, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
        description: "Jobs Available",
        tag: "Job"
      },
      {
        id: 3,
        username: "Bob",
        subTitle: "Post 3", // Add subTitle here
        date: "October 2, 2024",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
        description: "Jobs Available",
        tag: "Job"
      }])
  },[])
//   useEffect(() => {
//     // Fetch feed data from an API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();
//         setFeedData(data);
//       } catch (error) {
//         console.error('Error fetching feed data:', error);
//       }
//     };

//     fetchData();
//   }, []);

  const handleExpandClick = (id) => {
    setFeedData(feedData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          expanded: !item.expanded
        };
      }
      return item;
    }));
  };

  return (
    <Box sx={{display:"flex",flexDirection:"column",gap:2}}>
      {feedData.map(feed => (
        <FeedCard
          key={feed.id}
          id={feed.id}
          username={feed.username}
          subTitle={feed.subTitle}
          date={feed.date}
          imageUrl={feed.imageUrl}
          description={feed.description}
          expanded={feed.expanded}
          handleExpandClick={() => handleExpandClick(feed.id)}
          tag={feed.tag}
        />
      ))}
    </Box>
  );
};

export default ParentComponent;