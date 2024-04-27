import {React,useState} from 'react'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper';
import {useTheme} from '@emotion/react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';


function AddPost() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme=useTheme();
  return (
    <Paper >
      <Box  sx={{ maxWidth: 545,margin:2 }}>
        <Box sx={{height:"70px",elevation:3,display:"flex",gap:4 ,justifyContent:'center',alignItems:'center',padding:5,
        bgcolor:theme.palette.mode=="light"?"":""
      }}>
            <Avatar/>
            <TextField size="small" sx={{borderRadius:"25px",flex:1}} value="Start a post, try writing about your achievements"></TextField>
        </Box>
        <Box variant="outlined" sx={{gap:5,px:15}} > 
          <Button>Media</Button>
          <Button>Event</Button>
          <Button onClick={handleClickOpen}>Post</Button>
        </Box>
    </Box>
    <CreatePost open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
    </Paper>
  )
}

const CreatePost=(props)=>{
const {open,setOpen,handleClickOpen,handleClose}=props;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

// function CustomizedDialogs() {


  return (
    <>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
            ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
// }

}
export default AddPost