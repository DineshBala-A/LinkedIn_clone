import * as React from 'react';
import { styled } from '@mui/system';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Container } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';

const useStyles = styled((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function Notification() {
  const classes = useStyles();

  const notifications = [
    {
      id: 1,
      avatar: 'R',
      primaryText: 'Shrimp and Chorizo Paella',
      secondaryText: 'September 14, 2016',
      message: 'Your application for the position has been accepted!',
    },
    {
      id: 2,
      avatar: 'R',
      primaryText: 'Shrimp and Chorizo Paella',
      secondaryText: 'September 14, 2016',
      message: 'Your application for the position has been rejected.',
    },
    {
      id: 3,
      avatar: 'R',
      primaryText: 'Shrimp and Chorizo Paella',
      secondaryText: 'September 14, 2016',
      message: 'New message from the employer.',
    },
  ];

  const handleDelete = (id) => {
    console.log('Deleted notification with id:', id);
  };

  return (
    <Container maxWidth="sm">
      <List className={classes.root}>
        {notifications.map((notification) => (
          <React.Fragment key={notification.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar>{notification.avatar}</Avatar>
              </ListItemAvatar>
              <ListItemText sx={{color:"text.primary"}}
                primary={notification.primaryText}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="text.primary"
                    >
                      {notification.secondaryText}
                    </Typography>
                    {` - ${notification.message}`}
                  </React.Fragment>
                }
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(notification.id)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
}
