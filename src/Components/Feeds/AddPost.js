import {React,useState,useContext,useEffect} from 'react'
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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { MyContext } from '../MyContextProvider';
import { host } from '../../host';

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based, so we add 1
  const day = date.getDate().toString().padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}

function AddPost() {

  const { user_id, set_user_id } = useContext(MyContext);

  console.log("user_id:", user_id);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const theme=useTheme();
  return (
    <Paper  sx={{ maxWidth: 545,marginBottom:2 }}>
      <Box >
        <Box sx={{height:"70px",elevation:3,display:"flex",gap:4 ,justifyContent:'center',alignItems:'center',padding:2,
        bgcolor:theme.palette.mode=="light"?"":""
      }}>
            <Avatar/>
            <Typography noWrap size="small" sx={{border:1,padding:1,bgcolor:theme.palette.background.default,borderRadius:25}}  onClick={handleClickOpen}>
              Start a post, try writing about your achievements
            </Typography>
        </Box>
        {/* <Box variant="outlined" sx={{gap:5,px:15}} > 
          <Button>Media</Button>
          <Button>Event</Button>
          <Button onClick={handleClickOpen}>Post</Button>
        </Box> */}
    </Box>
    <CreatePost open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose}/>
    </Paper>
  )
}

const CreatePost=(props)=>{

  const { user_id, set_user_id ,forceUpdate} = useContext(MyContext);
const {open,setOpen,handleClickOpen,handleClose}=props;
const [inputs,setInputs]=useState({});
const [selectedRadioButton,setSelectedRadioButton]=useState("General");

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const handleSubmit=(event)=>{
  event.preventDefault();
  const data = new FormData(event.currentTarget);

  const formData={
    "user": {"userId": user_id},
    "type": data.get("type"),
    "description": data.get("desc"),
    "media": data.get("image"),
    "hashtags": "example_hashtags",
    "jobTitle": data.get("jobTitle"),
    "postDate": formatDate(new Date())
  };
  console.log(JSON.stringify(formData))
  const controller=new AbortController();
  const signal=controller.signal;
  fetch(`${host}/Post/${user_id}`,{
    signal,
    method:"POST",
    headers:{"Content-Type":"application/json",'ngrok-skip-browser-warning': 'any-value'},
    body:JSON.stringify(formData),
  }).then(response=>{
    if(!response.ok){
      throw new Error("Error");
    }
    handleClose();
    forceUpdate();
  }).catch(e=>{
    console.log(e);
  })
  return(()=>{
    controller.abort();
  })

}

// function CustomizedDialogs() {

  // useEffect(()=>{
  //   console.log(isJob);
  // },[isJob])
  return (
    <>
      <BootstrapDialog 
      maxWidth="md"
      component="form" onSubmit={handleSubmit}
        // onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Post
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
        <DialogContent dividers  sx={{minWidth:400,maxWidth:545,minHeight:300,maxHeight:400}} >
        <FormControl  >
        <Typography>Post type</Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="type"
            row
            onChange={(event)=>{
              setSelectedRadioButton(event.target.value)
            }}
            value={selectedRadioButton}
          >
            <FormControlLabel value="General"  control={<Radio />} label="General" />
            <FormControlLabel value="Job" control={<Radio />} label="Job" />
          </RadioGroup>
        </FormControl><br/><br/>
          <Typography>Job Title</Typography>
          <TextField disabled={selectedRadioButton!=="Job"} 
          name="jobTitle" multiline fullWidth  id="fullWidth" />
          <Typography>Description</Typography>
          <TextField name="desc" multiline fullWidth  id="fullWidth" />
          <br/><br/>
          <Typography >Image</Typography>
          {/* <TextField type="file" disabled="true"/> */}
          {/* <br/> */}
          <TextField name="image" fullWidth label="image url" size="medium" />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error" variant='outlined'>
            Cancel
          </Button>
          <Button autoFocus 
          // onClick={handleClose}
           type="submit" variant='contained'>
            Post
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
// }

}
export default AddPost