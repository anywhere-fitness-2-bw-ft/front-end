import React from 'react';
import { CssBaseline, createTheme, ThemeProvider  } from '@mui/material';
// import { makeStyles } from '@mui/material';
import Header from './Components/Header';
import { purple } from '@mui/material/colors';
import Register from './Components/Register';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
    },
    typography: {
      fontFamily: 'Merriweather-Sans', 
      fontWeightLight: 300,
      fontWeightMedium: 700,
      fontWeightBold: 800

    }
});

const App =  () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header />
      <Register />
    </ThemeProvider>
    </>
    
    
  )}

export default App;