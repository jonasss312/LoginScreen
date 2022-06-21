import './App.css';
import { Navigation } from './view/container/navigation/Navigation';
import React from "react";
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(t => ({
  background: {
    background: '#1C39BB',
    width: '100%',
    height: '100vh',
  }
}));

const theme = createTheme({
  typography: {
    fontFamily: 'Oxygen',
  }
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.background}>
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
