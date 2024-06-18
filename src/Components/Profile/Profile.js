import React, { useEffect, useState } from 'react';
import { Box, Avatar, Typography, Button, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {useTheme} from '@emotion/react';
import { Cancel } from '@mui/icons-material';
import { host } from '../../host';
const UserInfo = () => {
  const theme=useTheme()
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'Sudalai Vignesh',
    dob: '01/01/1990',
    place: 'San Francisco Bay Area',
    job: 'Software Engineer at XYZ Corp',
    bio: 'Lorem ipsum dolor sit amest, consectetur adipiscing elit.',
    qualification: 'Bachelor of Engineering',
    phone: '123-456-7890',
    email: 'john.doe@example.com'
  });

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleChange = (field, value) => {
    setUserInfo({ ...userInfo, [field]: value });
  };

  useEffect(()=>{
    // fetch(`${host}/Profile`)
  },[])

  return (
    <Box sx={{  padding: 2 }}>
      <Box display="flex" alignItems="center" sx={{bgcolor:theme.palette.mode=="light"?"":""}}>
        <Box flexGrow={1}>
          <Box sx={{ px: {"md":20} }}>
            <Avatar
              alt="Dinesh bala "
              src="/public/img/profile2.png"
              sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <Box>
            <Box>
          
          {editMode ?
          <Button onClick={handleEdit} startIcon={<Cancel />} color="error">
            {editMode ? 'Cancel' : ''}
          </Button>:<></>}
          <Button onClick={handleEdit} startIcon={<EditIcon />} >
            {editMode ? 'Save' : 'Edit'}
          </Button>
        </Box> 
              <TextField
                label="Username"
                value={userInfo.username}
                onChange={(e) => handleChange('username', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Date of Birth"
                value={userInfo.dob}
                onChange={(e) => handleChange('dob', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Place"
                value={userInfo.place}
                onChange={(e) => handleChange('place', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Job"
                value={userInfo.job}
                onChange={(e) => handleChange('job', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Bio"
                value={userInfo.bio}
                onChange={(e) => handleChange('bio', e.target.value)}
                fullWidth
                margin="normal"
                multiline
                readonly={!editMode}
              />
              <TextField
                label="Qualification"
                value={userInfo.qualification}
                onChange={(e) => handleChange('qualification', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Phone Number"
                value={userInfo.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
              <TextField
                label="Email"
                value={userInfo.email}
                onChange={(e) => handleChange('email', e.target.value)}
                fullWidth
                margin="normal"
                readonly={!editMode}
              />
            </Box>
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default UserInfo;
