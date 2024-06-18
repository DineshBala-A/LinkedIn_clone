import React from 'react'
import  Container from '@mui/material/Container'
import { Button, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
function MyAccount() {
  return (
    <Container sx={{px:{md:20}}}>
        <br/>
        <Grid container spacing={3}>
            <Paper sx={{height:"100vh",width:240,px:3}}>
            <Grid item md={4}>
                    <Button>Applications</Button>
            </Grid>
            </Paper>
            <Paper sx={{height:"100vh",width:500,px:10}}>
        
            <Grid item md={8}>
                <Typography>Job Application</Typography>
            </Grid>
            </Paper>

        </Grid>
    </Container>
  )
}

export default MyAccount