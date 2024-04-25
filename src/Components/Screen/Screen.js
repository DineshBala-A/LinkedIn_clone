import React from 'react'
import PrimarySearchAppBar from './AppBar'
import {useTheme} from '@emotion/react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

//custom components
import SignUp from '../Authenticate/SignUp';
import Login from '../Authenticate/Login.js'
function Screen({updateMode}) {
    const location =useLocation();
    const path=location.pathname;
    const theme=useTheme();
    console.log(path);
  return (
  <>
    <Paper>
     { path!=="/login" && path!=="/signup"?
        <PrimarySearchAppBar updateMode={updateMode}/>:
        <></>
     }       
    <Container sx={{marginTop:path!="/login" && path!=="/signup"?"60px":0,minHeight:"100vh",}}>
        <br/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/" exact element={<Content/>}/> 
        </Routes> 
    </Container>
    </Paper>
  </>

  )
}

const Content=()=>{
    return(
        <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget hendrerit ex. In venenatis lorem ut massa auctor tincidunt. Sed elementum eros at elit efficitur ornare. Maecenas venenatis convallis arcu. Praesent semper ex erat. Cras venenatis fringilla ligula nec vehicula. Nullam ac aliquam eros. Phasellus tempor tempor felis eget facilisis. Curabitur iaculis sed leo nec ultricies. Phasellus justo est, vestibulum euismod justo vitae, laoreet faucibus leo.

Nunc tempus vel massa at ornare. Sed hendrerit erat sit amet velit commodo, in ultrices felis rutrum. Aliquam convallis tellus id mi euismod, ut finibus tortor tempor. Morbi in rhoncus lorem. Praesent sed lectus et ipsum dictum porttitor. Quisque nec nibh ut leo accumsan venenatis. Nullam justo est, varius id consectetur at, placerat et enim. Vivamus bibendum commodo velit, at hendrerit diam ullamcorper id. Sed bibendum id augue in tincidunt. Aliquam congue diam non felis eleifend, gravida ullamcorper neque vulputate. Proin eu eleifend leo. Proin porttitor tellus in fringilla faucibus.

Nunc ut urna vitae ipsum sollicitudin aliquet. Nulla ornare eleifend efficitur. Cras in leo sit amet nisl pretium aliquet eu non ante. Donec dignissim odio nibh, non convallis purus mollis ac. Cras et efficitur purus, ut consequat tortor. Proin bibendum libero eget vestibulum pellentesque. Ut sagittis mauris ac pulvinar scelerisque. Nunc facilisis erat id ullamcorper ultricies. Mauris non ligula felis. Nunc consectetur viverra lorem sed maximus. Nulla condimentum elementum orci a tempus. In luctus suscipit mi nec sodales.

Proin et rutrum urna. Phasellus auctor quis ligula et sodales. Cras semper dui lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque vehicula pellentesque odio, a aliquet nunc malesuada eu. Cras justo ligula, sollicitudin fringilla viverra commodo, tristique nec neque. Aliquam at nunc a ex viverra dictum vitae eget lorem. Nunc ligula purus, pulvinar at ligula non, sagittis dapibus nisl. In ut dui magna. Mauris tempus, enim ac lacinia sagittis, elit libero feugiat risus, id semper lectus leo quis diam. Nunc sodales eros ut risus vestibulum, sed sagittis diam laoreet. Sed sed dolor commodo urna blandit luctus.

Cras nec malesuada erat. Donec ultricies semper justo eu mattis. Nulla volutpat cursus massa sed scelerisque. Maecenas vel enim nisl. Integer semper nibh vel tellus blandit mollis. Suspendisse potenti. Pellentesque tristique metus sollicitudin, scelerisque magna ac, lobortis eros. In luctus quam nec est condimentum fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas cursus ligula quis semper mollis. Nam efficitur pretium venenatis. Donec posuere enim sapien.

        </>
    )
}

export default Screen