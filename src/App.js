import {React,useState,useContext} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router } from 'react-router-dom';
import Screen from './Components/Screen/Screen';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import Box from '@mui/material/Box';
import { SnackbarProvider, useSnackbar } from 'notistack';
import {MyContextProvider} from './Components/MyContextProvider';

const App= () => {
  const [mode,setMode]=useState('light')


  const updateMode=(receivedMode)=>{
    setMode(receivedMode);
  }
  
  const theme=createTheme({
    palette:{
      mode,
      ...(mode === 'light'?
        {//light
          primary:{
            // main:'',
            // main:'#fff',
            main:'#2962ff'//use this *****

            
          },
          // secondary:{
          //   main:'#2962ff'
          // },
          background:{
            // default:'rgba(255,255,251)',
            // default:'#f6f6f6',
            default:'#f5f5f5',
            // paper:'#fff',
          }
        }
        :{//dark
          primary:{
            // main:'rgb(30, 30, 30)'
            // main:'#333'
              main:'#2962ff',

          },
          // secondary:{
          //   main:'#2962ff'
          // },
          background:{
            // default:'rgb(18, 18, 18)',
            default:'#262626',
            // paper:'rgb(30,30,30)',
            // paper:'#111111',
          }
        }
      )
      
    }, 
  })

  return (
    <>
        <CssBaseline />
        <MyContextProvider>
          <ThemeProvider theme={theme}>
            <Router>
              <SnackbarProvider maxSnack={3}>
                <Box>
                  <Screen updateMode={updateMode}/>
                </Box>
                </SnackbarProvider>  
            </Router>
          </ThemeProvider> 
        </MyContextProvider> 
    </>
  );
};

export default App;