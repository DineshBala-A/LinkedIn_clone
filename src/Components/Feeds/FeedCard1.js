import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Typography, Button, Menu, MenuItem, Avatar, Chip,Collapse } from '@mui/material';
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
        sx={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <Typography>{likes}</Typography>
        <IconButton aria-label="comment" onClick={handleExpandClick}>
          <CommentIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
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

  useEffect(() => {
    fetchFeedData();
  }, []);

  const fetchFeedData = async () => {
    try {
      const response = await fetch('https://example.com/api/feed');
      if (response.ok) {
        const data = await response.json();
        setFeedData(data);
      } else {
        console.error('Failed to fetch feed data');
      }
    } catch (error) {
      console.error('Error fetching feed data:', error);
    }
  };

  // Static posts
  const staticPosts = [
    {
      id: 1,
      username: "Alice",
      subTitle: "Paella Food", // Add subTitle here
      date: "October 1, 2024",
      imageUrl: "data:image/jpeg;base64,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",
      description: "Tasty, Yummy Paella Dish",
      tag: "General"
    },
    {
      id: 2,
      username: "Bob",
      subTitle: "Post 2", // Add subTitle here
      date: "October 2, 2024",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
      description: "Jobs Available",
      tag: ""
    },
    {
      id: 3,
      username: "Bob",
      subTitle: "Post 3", // Add subTitle here
      date: "October 2, 2024",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzp4YCVP4fRbPq2fBqSojR1FUtAK3oUN7gCg&usqp=CAU",
      description: "Jobs Available",
      tag: "job"
    }
  ];

  return (
    <div>
      {/* Render static posts */}
      {staticPosts.map((item) => (
        <FeedCard
          key={item.id}
          id={item.id}
          username={item.username}
          subTitle={item.subTitle} // Pass subTitle here
          date={item.date}
          imageUrl={item.imageUrl}
          description={item.description}
          expanded={false} // Set to true if you want the card to be expanded initially
          handleExpandClick={() => {}} // Pass the expand handler function if needed
          tag={item.tag} // Specify the tag dynamically
        />
      ))}
      {/* Render dynamic posts */}
      {feedData.map((item) => (
        <FeedCard
          key={item.id}
          id={item.id}
          username={item.username}
          subTitle={item.subTitle} // Pass subTitle here
          date={item.date}
          imageUrl={item.imageUrl}
          description={item.description}
          expanded={false} // Set to true if you want the card to be expanded initially
          handleExpandClick={() => {}} // Pass the expand handler function if needed
          tag={item.tag} // Specify the tag dynamically
        />
      ))}
    </div>
  );
};

export default ParentComponent;
