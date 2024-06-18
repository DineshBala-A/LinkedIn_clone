import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Person } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Save from '@mui/icons-material/Save';
import { ThemeContext } from '@emotion/react';
import { useTheme } from '@emotion/react';

export default function MiniProfile() {
  const theme=useTheme();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent >
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%"}}>
          <Avatar sx={{height:60,width:60}}>
            DB
          </Avatar>
          <br/>
          <Typography gutterBottom variant="h6" component="div">
            Dinesh Bala
          </Typography>
          <Typography variant="caption">MERN Developer</Typography>
        </Box>
        <br/> <Divider/> <br/>
        <Button variant="text" size="small" sx={{color:theme.palette.text.secondary}}>
          Profile views
        </Button>
        <Button variant="text" size="small" sx={{color:theme.palette.text.secondary}}>
          Post impressions
        </Button>
        <br/><Divider/><br/>
        <Button size="small" variant="text" startIcon={<Save/>} sx={{color:theme.palette.text.secondary}}>Saved Posts</Button>
        <br/>


      </CardContent>
      {/* <CardActions>
      </CardActions> */}
    </Card>
  );
}