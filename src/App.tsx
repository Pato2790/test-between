import React from 'react';
import { Typography, Box, CssBaseline, ThemeProvider } from '@material-ui/core';
import { theme } from './Themes/theme';
import ListAnimals from './Components/ListAnimals/ListAnimals';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography component="div">
        <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h2.fontSize" m={3}>
          Animal Lovers Blog
        </Box>
      </Typography>
      <Typography component="div">
        <Box textAlign="center" fontSize="h6.fontSize" m={3}>
          These are our users who have chosen their favorite animals. Remember that the tables are grouped by animals!
        </Box>
      </Typography>
      <ListAnimals />
    </ThemeProvider>
  );
}

export default App;
