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
import ArrowDownward from '@mui/icons-material/ArrowDownward';

export default function News() {
  const theme=useTheme();
  return (
    <Card sx={{ maxWidth: 345, padding:1}}>
      <CardContent >
        <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start",width:"100%",}}>
          {/* <Avatar sx={{height:60,width:60}}>
            DB
          </Avatar>
          <br/> */}
          <Typography gutterBottom variant="h6" component="div">
            Link 'em news
          </Typography>
          <Typography noWrap variant="caption" size="small" sx={{color:theme.palette.text.secondary}}>{`- Top companies in tech, finance, and retail`} </Typography><br/>
          <Typography noWrap variant="caption" size="small" sx={{color:theme.palette.text.secondary}}>{`- E-retailers retag 'health drinks'`} </Typography><br/>
          <Typography noWrap variant="caption" size="small" sx={{color:theme.palette.text.secondary}}>{`- Firms eye India for digital needs`} </Typography><br/>
          <Typography noWrap variant="caption" size="small" sx={{color:theme.palette.text.secondary}}>{`- Trends shaping the CSR landscape`} </Typography><br/>
          <Typography noWrap variant="caption" size="small" sx={{color:theme.palette.text.secondary}}>{`- LetsTransport raises $22 million`} </Typography>
          {/* <Typography noWrap variant="text" size="small" sx={{color:theme.palette.text.secondary}}>{`- Top tech companies recruiters...`} </Typography> */}
        </Box>
        

      </CardContent>
      <CardActions>
        <Button endIcon={<ArrowDownward/>} sx={{color:theme.palette.text.primary}}>
            Show More
        </Button>
      </CardActions>
    </Card>
  );
}