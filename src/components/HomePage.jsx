// Only Components Parts Will Be Here
import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import useHomeStyles from '../styles/HomeStyle';
import { IconButton } from '@mui/material';

import profileIcon from '../assets/Images/Profile.png';   //Demo For Samridhi


const HomePage = () => {
  const styles = useHomeStyles();

  return (
    //Use Style Props
    <Box sx={styles.container}>  
      <Paper elevation={3} sx={styles.paper}>

        <Typography sx={styles.title}>Welcome to Themed App</Typography>
        <Typography sx={styles.description}>
          This is an example of using MUI ThemeProvider in a clean React project.
        </Typography>
        <Box mt={2}>
          <Button variant="contained" color="primary" sx={styles.button}>
            Get Started
          </Button>

          <IconButton sx={{ ml: 5 }}>
            <img src={profileIcon} alt="icon" width={34} height={34} />
          </IconButton>
        </Box>
      </Paper>
    </Box>
    
  );
};

export default HomePage;
